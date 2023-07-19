import { Button, CircularProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { FC, Fragment, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { IState } from "../../../types";
import InfoBox from "../infoBox/InfoBox";
import { initialFilter, initialFilterFields } from "./consts";
import { ExamFilterForm } from "./filter/ExamFilterForm";
import "./styles.scss";
import { ExamTable } from "./table/ExamTable";
import checkIcon from "../../../assets/check-icon.png";
import { useEffect } from "react";
import {
  getFromFields,
  updateFilterFields,
} from "../../../libraries/formDataHandling/functions";
import {
  deleteLab,
  deleteLabReset,
  searchLabs,
} from "../../../state/laboratories/actions";
import { getExams } from "../../../state/exams/actions";
import { ILaboratoriesState } from "../../../state/laboratories/types";
import { LaboratoryDTO } from "../../../generated";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";
import { getPatientThunk } from "../../../state/patients/actions";
import isEmpty from "lodash.isempty";
import { EditLaboratoryContent } from "./EditLaboratoryContent";
import { PATHS } from "../../../consts";
import { Permission } from "../../../libraries/permissionUtils/Permission";
import { useLaboratories } from "../../../libraries/hooks/api/useLaboratories";
import Pagination from "../pagination/Pagination";
import { TFilterValues } from "./filter/types";

export const Exams: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [filter, setFilter] = useState(initialFilter as TFilterValues);

  const [deletedObjCode, setDeletedObjCode] = useState("");

  const { data, pageInfo, page, handlePageChange } = useLaboratories();

  const fields = useMemo(
    () => updateFilterFields(initialFilterFields, filter),
    [filter]
  );
  const labStore = useSelector<IState, ILaboratoriesState>(
    (state: IState) => state.laboratories
  );
  const handleResetFilter = () => {
    setFilter(initialFilter as TFilterValues);
  };

  useEffect(() => {
    setFilter((previous) => ({ ...previous, page: page }));
  }, [page]);

  useEffect(() => {
    dispatch(searchLabs(getFromFields(fields, "value")));
    dispatch(getExams());
  }, []);

  useEffect(() => {
    if (!isEmpty(filter.patientCode)) {
      dispatch(getPatientThunk(filter.patientCode?.toString() ?? "0"));
    }
    dispatch(searchLabs({ ...filter, paged: true }));
  }, [filter]);

  useEffect(() => {
    const refresh = (
      location.state as { refresh: boolean | undefined } | undefined
    )?.refresh;
    if (refresh) {
      dispatch(searchLabs(filter));
    }
  }, [location]);

  const onSubmit = (values: TFilterValues) => {
    setFilter({ ...values, page: 0, size: filter.size });
  };

  const onEdit = (row: LaboratoryDTO) => {
    navigate(`${PATHS.laboratory}/${row.code}/edit`);
  };
  const onDelete = (code: number | undefined) => {
    setDeletedObjCode(`${code}` ?? "");
    dispatch(deleteLab(code));
  };

  const onPageChange = (e: any, page: number) => handlePageChange(e, page - 1);

  const errorMessage = useSelector((state: IState) =>
    state.laboratories.searchLabs.error?.message
      ? state.laboratories.searchLabs.error?.message
      : t("common.somethingwrong")
  );
  let status = useSelector(
    (state: IState) => state.laboratories.searchLabs.status
  );

  const ExamContent = useMemo(() => {
    return (
      <>
        <div className="lab__header">
          <div className="lab__title">{t("nav.laboratory")}</div>
          <div className="lab__actions">
            <Permission require="exam.create">
              <Button
                onClick={() => {
                  navigate(`${PATHS.laboratory}/new`);
                }}
                type="button"
                variant="contained"
                color="primary"
              >
                <Add fontSize="small" />
                <span className="new__button__label">{t("lab.newlab")}</span>
              </Button>
            </Permission>
          </div>
        </div>
        {status === "LOADING" && (
          <CircularProgress
            style={{ marginLeft: "50%", position: "relative" }}
          />
        )}
        {status !== "LOADING" && (
          <Permission require="exam.read">
            <ExamFilterForm
              onSubmit={onSubmit}
              fields={fields}
              handleResetFilter={handleResetFilter}
            />
            {status === "SUCCESS_EMPTY" && (
              <InfoBox type="info" message={t("common.emptydata")} />
            )}
            {status === "FAIL" && (
              <InfoBox type="error" message={errorMessage} />
            )}
            {status === "SUCCESS" && (
              <>
                <ExamTable
                  data={data ?? []}
                  handleDelete={onDelete}
                  handleEdit={onEdit}
                />
                <Pagination
                  page={(pageInfo?.page ?? 0) + 1}
                  count={pageInfo?.totalPage}
                  onChange={onPageChange}
                />
              </>
            )}
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
                dispatch(searchLabs(filter));
              }}
              handleSecondaryButtonClick={() => {}}
            />
          </Permission>
        )}
      </>
    );
  }, [status, fields, data, filter, dispatch, labStore]);

  return (
    <Fragment>
      <div className="lab_labs">
        <Routes>
          <Route index element={ExamContent} />
          <Route path={`/new`} element={<EditLaboratoryContent />} />
          <Route path={`/:id/edit`} element={<EditLaboratoryContent />} />
        </Routes>
      </div>
    </Fragment>
  );
};
