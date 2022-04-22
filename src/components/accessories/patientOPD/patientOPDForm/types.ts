import { IForm } from "../../../../libraries/formDataHandling/types";

interface IOwnProps {
  shouldResetForm: boolean;
  resetFormCallback: () => void;
}
export type TProps = IForm<TPatientOPDFormFieldName, any> & IOwnProps;

export type TPatientOPDFormFieldName =
  | "date"
  | "disease"
  | "disease2"
  | "disease3"
  | "note"
  | "newPatient"
  | "referralFrom"
  | "referralTo";
