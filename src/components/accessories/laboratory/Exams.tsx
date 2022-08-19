import { Button, CircularProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, {
  FC,
  Fragment,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IState } from "../../../types";
import InfoBox from "../infoBox/InfoBox";
import { initialFields, initialFilterFields } from "./consts";
import { ExamFilterForm } from "./filter/ExamFilterForm";
import "./styles.scss";
import { ExamTable } from "./table/ExamTable";
import checkIcon from "../../../assets/check-icon.png";
import { useEffect } from "react";
import { TFilterValues } from "../billTable/types";
import {
  getFromFields,
  updateFilterFields,
  updateLabFields,
} from "../../../libraries/formDataHandling/functions";
import {
  deleteLab,
  deleteLabReset,
  getLabWithRowsByCode,
  searchLabs,
} from "../../../state/laboratories/actions";
import { getExams } from "../../../state/exams/actions";
import { CustomDialog } from "../customDialog/CustomDialog";
import { ILaboratoriesState } from "../../../state/laboratories/types";
import { LaboratoryForPrintDTO } from "../../../generated";
import ExamForm from "./examForm/ExamForm";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";
import { getPatientThunk } from "../../../state/patients/actions";

export const Exams: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({} as TFilterValues);

  const [showForm, setShowForm] = useState(false);

  const [deletedObjCode, setDeletedObjCode] = useState("");
  const [creationMode, setCreationMode] = useState(true);

  const labWithRows = useSelector(
    (state: IState) => state.laboratories.getLabWithRowsByCode.data
  );

  const labToEdit = labWithRows?.laboratoryDTO;

  const data = useSelector(
    (state: IState) => state.laboratories.searchLabs.data
  );

  const fields = useMemo(
    () => updateFilterFields(initialFilterFields, filter),
    [filter]
  );
  const labStore = useSelector<IState, ILaboratoriesState>(
    (state: IState) => state.laboratories
  );

  const createStatus = useSelector<IState, any>(
    (state: IState) => state.laboratories.createLab.status
  );
  const updateStatus = useSelector<IState, any>(
    (state: IState) => state.laboratories.updateLab.status
  );
  const deleteStatus = useSelector<IState, any>(
    (state: IState) => state.laboratories.deleteLab.status
  );

  useEffect(() => {
    dispatch(getPatientThunk(filter.patientCode?.toString()));
    dispatch(searchLabs(filter));
  }, [filter]);

  useEffect(() => {
    if (
      createStatus === "SUCCESS" ||
      updateStatus === "SUCCESS" ||
      deleteStatus === "SUCCESS"
    ) {
      dispatch(searchLabs(filter));
    }
  }, [createStatus, updateStatus, deleteStatus]);

  const onSubmit = (values: TFilterValues) => {
    setFilter(values);
  };

  const handleReset = useCallback(() => {
    setShowForm(false);
  }, [dispatch]);

  const onEdit = (row: LaboratoryForPrintDTO) => {
    setCreationMode(false);
    dispatch(getPatientThunk(row.patientCode?.toString() ?? ""));
    dispatch(getLabWithRowsByCode(row.code));
    setShowForm(true);
  };
  const onDelete = (code: number | undefined) => {
    setDeletedObjCode(`${code}` ?? "");
    dispatch(deleteLab(code));
  };

  const patient = useSelector(
    (state: IState) => state.patients.selectedPatient.data
  );

  const open = useMemo(() => {
    return creationMode
      ? showForm
      : showForm &&
          labWithRows?.laboratoryDTO?.code !== undefined &&
          patient?.code !== undefined;
  }, [showForm, creationMode, labToEdit]);

  const formFields = useMemo(() => {
    return creationMode
      ? initialFields
      : updateLabFields(initialFields, labToEdit ?? {});
  }, [creationMode, labToEdit]);

  const errorMessage = useSelector(
    (state: IState) => state.laboratories.searchLabs.error?.message
  );
  let status = useSelector(
    (state: IState) => state.laboratories.searchLabs.status
  );
  const deleteErrorMessage = useSelector(
    (state: IState) => state.laboratories.deleteLab.error?.message
  );

  useEffect(() => {
    dispatch(searchLabs(getFromFields(fields, "value")));
    dispatch(getExams());
  }, []);

  return (
    <Fragment>
      <div className="lab_labs">
        <div className="lab__header">
          <div className="lab__title">{t("nav.laboratory")}</div>
          <div className="lab__actions">
            <Button
              onClick={() => {
                setCreationMode(true);
                setShowForm(true);
              }}
              type="button"
              variant="contained"
            >
              <Add fontSize="small" />
              <span className="new__button__label">{t("lab.newlab")}</span>
            </Button>
          </div>
        </div>

        {(() => {
          switch (status) {
            case "FAIL":
              return (
                <>
                  <ExamFilterForm onSubmit={onSubmit} fields={fields} />
                  <InfoBox type="error" message={errorMessage} />
                </>
              );

            case "LOADING":
              return (
                <CircularProgress
                  style={{ marginLeft: "50%", position: "relative" }}
                />
              );

            case "SUCCESS_EMPTY":
              return (
                <>
                  <ExamFilterForm onSubmit={onSubmit} fields={fields} />
                  <InfoBox type="warning" message={t("common.emptydata")} />
                </>
              );

            case "SUCCESS":
              return (
                <>
                  <ExamFilterForm onSubmit={onSubmit} fields={fields} />
                  {deleteStatus === "FAIL" && (
                    <div className="info-box-container">
                      <InfoBox type="error" message={deleteErrorMessage} />
                    </div>
                  )}
                  <ExamTable
                    data={data ?? []}
                    handleDelete={onDelete}
                    handleEdit={onEdit}
                  />
                </>
              );
          }
        })()}
        <CustomDialog
          title={creationMode ? t("lab.newlab") : t("lab.editlab")}
          open={open}
          description=""
          onClose={() => {
            setShowForm(false);
          }}
          content={
            <ExamForm
              fields={formFields}
              handleReset={handleReset}
              creationMode={creationMode}
              labWithRowsToEdit={labWithRows ?? {}}
            />
          }
        />
        {labStore.deleteLab.status === "LOADING" && (
          <CircularProgress
            style={{ marginLeft: "50%", position: "relative" }}
          />
        )}
        <ConfirmationDialog
          isOpen={labStore.deleteLab.status === "SUCCESS"}
          title={t("lab.deleted")}
          icon={checkIcon}
          info={t("common.deletesuccess", { code: deletedObjCode })}
          primaryButtonLabel={t("common.ok")}
          handlePrimaryButtonClick={() => {
            dispatch(deleteLabReset());
          }}
          handleSecondaryButtonClick={() => {}}
        />
      </div>
    </Fragment>
  );
};
