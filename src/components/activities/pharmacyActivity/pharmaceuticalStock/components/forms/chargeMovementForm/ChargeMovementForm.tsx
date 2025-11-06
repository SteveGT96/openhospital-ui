import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import Button from "components/accessories/button/Button";
import {
  AutocompleteFormField,
  DateFormField,
  TextFormField,
} from "components/accessories/forms";
import { MovementDTO } from "generated";
import { DATETIME_FORMAT } from "libraries/consts";
import { useTranslation } from "libraries/hooks";
import { useMedicals } from "libraries/hooks/api";
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { LotFormField } from "./LotFormField";
import { MovementDTOSchema, getInitialValues } from "./consts";
import "./styles.scss";
import { ChargeMovementProps, TFormValues } from "./types";

export function ChargeMovementForm({
  movement,
  onSubmit,
}: ChargeMovementProps) {
  const { t } = useTranslation();

  const { medicals, options: medicalOptions, selectMedical } = useMedicals();

  const { control, subscribe, setValue, formState } = useForm<TFormValues>({
    defaultValues: getInitialValues(movement),
    resolver: standardSchemaResolver(MovementDTOSchema),
  });

  const values = useWatch({
    control,
    compute: (values) => {
      return {
        ...values,
        lot: values.lot
          ? {
              ...values.lot,
              dueDate: values.lot.dueDate?.toISOString(),
              preparationDate: values.lot.preparationDate?.toISOString(),
            }
          : undefined,
        medical: medicals.find((medical) => medical.code === values.medical),
      };
    },
  });

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        console.log(values);
      },
    });

    return () => callback();
  }, [subscribe]);

  useEffect(() => {
    if (formState.isValid) {
      onSubmit(values as any as MovementDTO);
    }
  }, [values]);

  return (
    <div className="chargeMovementForm">
      <form className="form-grid-layout gap-2">
        <DateFormField
          format={DATETIME_FORMAT}
          label={t("pharmacy.form.fields.date")}
          control={control}
          name="date"
        />
        <div className="col-span-full">
          <AutocompleteFormField
            label={t("pharmacy.form.fields.medical")}
            control={control}
            name="medical"
            options={medicalOptions}
          />
        </div>
        <TextFormField
          type="number"
          label={t("pharmacy.form.fields.quantity")}
          control={control}
          name="quantity"
        />
        <TextFormField
          type="number"
          label={t("pharmacy.form.fields.refNo")}
          control={control}
          name="refNo"
        />
        <div className="col-start-1 col-span-full"></div>
        {values.medical && (
          <LotFormField medical={values.medical} control={control} />
        )}
        <div className="flex gap-2 justify-end col-span-full p-2">
          <Button
            type="reset"
            variant="text"
            disabled={formState.isSubmitting}
            dataCy="charge-movement-cancel"
          >
            {t("common.close")}
          </Button>
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            dataCy="charge-movement-submit"
          >
            {t("pharmacy.buttons.charge")}
          </Button>
        </div>
      </form>
    </div>
  );
}
