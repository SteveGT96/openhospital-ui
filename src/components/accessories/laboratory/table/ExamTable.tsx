import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { LaboratoryDTO, LaboratoryForPrintDTO } from "../../../../generated";
import { CustomModal } from "../../customModal/CustomModal";
import SkeletonLoader from "../../skeletonLoader/SkeletonLoader";
import Table from "../../table/Table";
import { IExamTableProps } from "./types";
import "./styles.scss";
import { renderDate } from "../../../../libraries/formatUtils/dataFormatting";
import { LaboratoryDetails } from "../LaboratoryDetails";
import { useDispatch } from "react-redux";
import { getLabWithRowsByCode } from "../../../../state/laboratories/actions";

export const ExamTable: FC<IExamTableProps> = ({
  data,
  handleDelete,
  handleEdit,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const header = ["id", "date", "patName", "exam", "result"];
  const dateFields = ["date"];
  const label = {
    id: t("lab.code"),
    date: t("lab.date"),
    patName: t("lab.patient"),
    exam: t("lab.exam"),
    result: t("lab.result"),
  };
  const order = ["id", "date", "patName", "exam", "result"];

  const formatDataToDisplay = (data: LaboratoryForPrintDTO[]) => {
    let results: any = [];
    if (data)
      results = data.map((e) => {
        return {
          id: e.code ?? "",
          date: renderDate(e.date ?? ""),
          patName: e.patName ?? "",
          exam: e.exam ?? "",
          result: e.result ?? "",
          patientCode: e.patientCode ?? "",
        };
      });
    return results;
  };

  const formattedData: any[] = formatDataToDisplay(data);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleView = (row: any) => {
    dispatch(getLabWithRowsByCode(row.id));
    handleOpen();
  };

  const onEdit = (row: any) => {
    if (handleEdit !== undefined) {
      handleEdit(data.find((item) => item.code === row.id) ?? {});
    }
  };
  const onDelete = (row: any) => {
    if (handleDelete !== undefined) {
      handleDelete(data.find((item) => item.code === row.id)?.code);
    }
  };

  return (
    <div className="exams__table">
      <Table
        rowData={formattedData}
        dateFields={dateFields}
        tableHeader={header}
        labelData={label}
        columnsOrder={order}
        rowsPerPage={5}
        onView={handleView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <CustomModal
        open={open}
        onClose={handleClose}
        title={t("lab.details")}
        description={t("lab.details")}
        content={<LaboratoryDetails />}
      />
    </div>
  );
};
