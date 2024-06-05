import produce from "immer";
import { ApiResponse, IAction } from "../types";
import {
  CREATE_DISEASE_FAIL,
  CREATE_DISEASE_LOADING,
  CREATE_DISEASE_RESET,
  CREATE_DISEASE_SUCCESS,
  GET_DISEASEIPDIN_FAIL,
  GET_DISEASEIPDIN_LOADING,
  GET_DISEASEIPDIN_SUCCESS,
  GET_DISEASEIPDOUT_FAIL,
  GET_DISEASEIPDOUT_LOADING,
  GET_DISEASEIPDOUT_SUCCESS,
  GET_DISEASES_FAIL,
  GET_DISEASES_LOADING,
  GET_DISEASES_SUCCESS,
  GET_DISEASE_FAIL,
  GET_DISEASE_LOADING,
  GET_DISEASE_SUCCESS,
  UPDATE_DISEASE_FAIL,
  UPDATE_DISEASE_LOADING,
  UPDATE_DISEASE_RESET,
  UPDATE_DISEASE_SUCCESS,
} from "./consts";
import { initial } from "./initial";
import { IDiseaseState } from "./types";

export default produce((draft: IDiseaseState, action: IAction<any, any>) => {
  switch (action.type) {
    case GET_DISEASE_LOADING: {
      draft.diseasesOpd.status = "LOADING";
      break;
    }

    case GET_DISEASE_SUCCESS: {
      draft.diseasesOpd.status = "SUCCESS";
      draft.diseasesOpd.data = action.payload;
      delete draft.diseasesOpd.error;
      break;
    }

    case GET_DISEASE_FAIL: {
      draft.diseasesOpd.status = "FAIL";
      draft.diseasesOpd.error = action.error;
      break;
    }

    /**
     * get diseases IPD IN
     */
    case GET_DISEASEIPDIN_LOADING: {
      draft.diseasesIpdIn.status = "LOADING";
      break;
    }

    case GET_DISEASEIPDIN_SUCCESS: {
      draft.diseasesIpdIn.status = "SUCCESS";
      draft.diseasesIpdIn.data = action.payload;
      delete draft.diseasesIpdIn.error;
      break;
    }

    case GET_DISEASEIPDIN_FAIL: {
      draft.diseasesIpdIn.status = "FAIL";
      draft.diseasesIpdIn.error = action.error;
      break;
    }

    case GET_DISEASEIPDOUT_LOADING: {
      draft.diseasesIpdOut.status = "LOADING";
      break;
    }

    case GET_DISEASEIPDOUT_SUCCESS: {
      draft.diseasesIpdOut.status = "SUCCESS";
      draft.diseasesIpdOut.data = action.payload;
      delete draft.diseasesIpdOut.error;
      break;
    }

    case GET_DISEASEIPDOUT_FAIL: {
      draft.diseasesIpdOut.status = "FAIL";
      draft.diseasesIpdOut.error = action.error;
      break;
    }

    case GET_DISEASES_LOADING: {
      draft.allDiseases.status = "LOADING";
      break;
    }

    case GET_DISEASES_SUCCESS: {
      draft.allDiseases.status = "SUCCESS";
      draft.allDiseases.data = action.payload;
      delete draft.allDiseases.error;
      break;
    }

    case GET_DISEASES_FAIL: {
      draft.allDiseases.status = "FAIL";
      draft.allDiseases.error = action.error;
      break;
    }

    case CREATE_DISEASE_LOADING: {
      draft.create.status = "LOADING";
      break;
    }

    case CREATE_DISEASE_SUCCESS: {
      draft.create.status = "SUCCESS";
      draft.create.data = action.payload;
      delete draft.create.error;
      break;
    }

    case CREATE_DISEASE_FAIL: {
      draft.create.status = "FAIL";
      draft.create.error = action.error;
      break;
    }

    case CREATE_DISEASE_RESET: {
      draft.create = new ApiResponse({ status: "IDLE" });
      break;
    }

    case UPDATE_DISEASE_LOADING: {
      draft.update.status = "LOADING";
      break;
    }

    case UPDATE_DISEASE_SUCCESS: {
      draft.update.status = "SUCCESS";
      draft.update.data = action.payload;
      delete draft.update.error;
      break;
    }

    case UPDATE_DISEASE_FAIL: {
      draft.update.status = "FAIL";
      draft.update.error = action.error;
      break;
    }

    case UPDATE_DISEASE_RESET: {
      draft.update = new ApiResponse({ status: "IDLE" });
      break;
    }
  }
}, initial);
