import { useTranslation } from "react-i18next";
import WardForm from "../wardForm/WardForm";
import React from "react";
import { getInitialFields } from "../wardForm/consts";
import { useAppDispatch, useAppSelector } from "libraries/hooks/redux";
import { WardDTO } from "../../../../../generated";
import { ApiResponse } from "../../../../../state/types";
import { updateWard } from "../../../../../state/ward";
import { IState } from "../../../../../types";
import { Navigate, useLocation, useParams } from "react-router";
import { PATHS } from "../../../../../consts";

export const EditWard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { state }: { state: WardDTO | undefined } = useLocation();
  const { id } = useParams();
  const update = useAppSelector((state) => state.wards.update);

  const handleSubmit = (value: WardDTO) => {
    dispatch(updateWard({ ...value, lock: state?.lock }));
  };

  if (state?.code?.toString() !== id?.toString()) {
    return <Navigate to={PATHS.admin_wards} />;
  }

  return (
    <WardForm
      creationMode={false}
      onSubmit={handleSubmit}
      isLoading={!!update.isLoading}
      resetButtonLabel={t("common.cancel")}
      submitButtonLabel={t("ward.updateWard")}
      fields={getInitialFields(state)}
    />
  );
};
