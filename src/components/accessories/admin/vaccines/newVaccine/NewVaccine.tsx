import { useTranslation } from "react-i18next";
import VaccineForm from "../vaccineForm/VaccineForm";
import React from "react";
import { getInitialFields } from "../vaccineForm/consts";
import { useAppDispatch, useAppSelector } from "libraries/hooks/redux";
import { VaccineDTO } from "../../../../../generated";
import { createVaccine } from "../../../../../state/vaccines";
import { IState } from "../../../../../types";
import { ApiResponse } from "../../../../../state/types";

export const NewVaccine = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const create = useAppSelector((state) => state.vaccines.create);

  const handleSubmit = (value: VaccineDTO) => {
    dispatch(createVaccine(value));
  };

  return (
    <VaccineForm
      creationMode
      onSubmit={handleSubmit}
      isLoading={!!create.isLoading}
      resetButtonLabel={t("common.cancel")}
      submitButtonLabel={t("vaccine.saveVaccine")}
      fields={getInitialFields(undefined)}
    />
  );
};
