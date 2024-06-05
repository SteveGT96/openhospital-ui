import { useTranslation } from "react-i18next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SupplierDTO } from "../../../../../generated";
import { IState } from "../../../../../types";
import { ApiResponse } from "../../../../../state/types";
import SupplierForm from "../supplierForm/SupplierForm";
import { getInitialFields } from "../supplierForm/consts";
import { createSupplier } from "../../../../../state/suppliers/actions";

export const NewSupplier = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const create = useSelector<IState, ApiResponse<SupplierDTO>>(
    (state) => state.suppliers.create
  );

  const handleSubmit = (value: SupplierDTO) => {
    dispatch(createSupplier(value));
  };

  return (
    <SupplierForm
      creationMode
      onSubmit={handleSubmit}
      isLoading={!!create.isLoading}
      resetButtonLabel={t("common.cancel")}
      submitButtonLabel={t("supplier.saveSupplier")}
      fields={getInitialFields(undefined)}
    />
  );
};
