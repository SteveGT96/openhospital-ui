import isEmpty from "lodash.isempty";
import { Dispatch } from "redux";
import { MedicalDTO } from "../../generated";
import {
  GetMedicalsUsingGETSortByEnum,
  MedicalControllerApi,
} from "../../generated/apis/MedicalControllerApi";
import { customConfiguration } from "../../libraries/apiUtils/configuration";
import { IAction } from "../types";
import {
  GET_MEDICAL_FAIL,
  GET_MEDICAL_LOADING,
  GET_MEDICAL_SUCCESS,
} from "./consts";

const medicalControllerApi = new MedicalControllerApi(customConfiguration());

export const getMedicals =
  () =>
  (dispatch: Dispatch<IAction<MedicalDTO[], {}>>): void => {
    dispatch({
      type: GET_MEDICAL_LOADING,
    });
    medicalControllerApi
      .getMedicalsUsingGET({
        sortBy: GetMedicalsUsingGETSortByEnum.NAME,
      })
      .subscribe(
        (payload) => {
          if (typeof payload === "object" && !isEmpty(payload)) {
            dispatch({
              type: GET_MEDICAL_SUCCESS,
              payload: payload,
            });
          } else {
            dispatch({
              type: GET_MEDICAL_SUCCESS,
              payload: [],
            });
          }
        },
        (error) => {
          dispatch({
            type: GET_MEDICAL_FAIL,
            error: error?.response,
          });
        }
      );
  };
