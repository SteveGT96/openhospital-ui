import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "libraries/hooks/redux";
import { Navigate, useLocation, useParams } from "react-router";
import { VaccineTypeDTO } from "../../../../../../../generated";
import { IState } from "../../../../../../../types";
import { ApiResponse } from "../../../../../../../state/types";
import { updateVaccineType } from "../../../../../../../state/types/vaccines";
import { PATHS } from "../../../../../../../consts";
import { getInitialFields } from "../vaccineTypesForm/consts";
import VaccineTypeForm from "../vaccineTypesForm/VaccineTypeForm";
import { setTypeMode, TypeMode } from "../../../../../../../state/types/config";
import "./styles.scss";

export const EditVaccineType = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { state }: { state: VaccineTypeDTO | undefined } = useLocation();
  const { code } = useParams();
  const update = useAppSelector((state) => state.types.vaccines.update);

  const mode = useAppSelector((state) => state.types.config.mode);

  const handleSubmit = (value: VaccineTypeDTO) => {
    dispatch(updateVaccineType(value));
  };

  useEffect(() => {
    if (mode !== "edit") {
      dispatch(setTypeMode("edit"));
    }
  }, [mode, dispatch]);

  if (state?.code !== code) {
    return <Navigate to={PATHS.admin_vaccines_types} />;
  }

  return (
    <div className="editVaccineType">
      <h3 data-cy="sub-activity-title" className="title">
        {t("vaccineTypes.editVaccineType")}
      </h3>
      <VaccineTypeForm
        creationMode={false}
        onSubmit={handleSubmit}
        isLoading={!!update.isLoading}
        resetButtonLabel={t("common.cancel")}
        submitButtonLabel={t("vaccineTypes.updateVaccineType")}
        fields={getInitialFields(state)}
      />
    </div>
  );
};
