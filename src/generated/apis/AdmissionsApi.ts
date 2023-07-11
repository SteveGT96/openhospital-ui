// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    AdmissionDTO,
    AdmittedPatientDTO,
    PageAdmissionDTO,
} from '../models';

export interface DeleteAdmissionType1Request {
    id: number;
}

export interface DischargePatientRequest {
    patientCode: number;
    admissionDTO: AdmissionDTO;
}

export interface GetAdmissionsRequest {
    admissionrange: Array<string>;
    page?: number;
    size?: number;
    paged?: boolean;
}

export interface GetAdmissions1Request {
    patientCode: number;
}

export interface GetAdmittedPatientsRequest {
    searchterms?: string;
    admissionrange?: Array<string>;
    dischargerange?: Array<string>;
}

export interface GetCurrentAdmissionRequest {
    patientCode: number;
}

export interface GetDischargesRequest {
    dischargerange: Array<string>;
    page?: number;
    size?: number;
}

export interface GetNextYProgRequest {
    wardcode: string;
}

export interface GetUsedWardBedRequest {
    wardid: string;
}

export interface NewAdmissionsRequest {
    admissionDTO: AdmissionDTO;
}

export interface UpdateAdmissionsRequest {
    admissionDTO: AdmissionDTO;
}

/**
 * no description
 */
export class AdmissionsApi extends BaseAPI {

    /**
     */
    deleteAdmissionType1({ id }: DeleteAdmissionType1Request): Observable<boolean>
    deleteAdmissionType1({ id }: DeleteAdmissionType1Request, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteAdmissionType1({ id }: DeleteAdmissionType1Request, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(id, 'id', 'deleteAdmissionType1');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/admissions/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    dischargePatient({ patientCode, admissionDTO }: DischargePatientRequest): Observable<boolean>
    dischargePatient({ patientCode, admissionDTO }: DischargePatientRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    dischargePatient({ patientCode, admissionDTO }: DischargePatientRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'dischargePatient');
        throwIfNullOrUndefined(admissionDTO, 'admissionDTO', 'dischargePatient');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<boolean>({
            url: '/admissions/discharge',
            method: 'POST',
            headers,
            query,
            body: admissionDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    getAdmissions({ admissionrange, page, size, paged }: GetAdmissionsRequest): Observable<PageAdmissionDTO>
    getAdmissions({ admissionrange, page, size, paged }: GetAdmissionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PageAdmissionDTO>>
    getAdmissions({ admissionrange, page, size, paged }: GetAdmissionsRequest, opts?: OperationOpts): Observable<PageAdmissionDTO | RawAjaxResponse<PageAdmissionDTO>> {
        throwIfNullOrUndefined(admissionrange, 'admissionrange', 'getAdmissions');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'admissionrange': admissionrange,
        };

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }
        if (paged != null) { query['paged'] = paged; }

        return this.request<PageAdmissionDTO>({
            url: '/admissions',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getAdmissions1({ patientCode }: GetAdmissions1Request): Observable<Array<AdmissionDTO>>
    getAdmissions1({ patientCode }: GetAdmissions1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmissionDTO>>>
    getAdmissions1({ patientCode }: GetAdmissions1Request, opts?: OperationOpts): Observable<Array<AdmissionDTO> | RawAjaxResponse<Array<AdmissionDTO>>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getAdmissions1');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<AdmissionDTO>>({
            url: '/admissions/patient/{patientCode}'.replace('{patientCode}', encodeURI(patientCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getAdmittedPatients({ searchterms, admissionrange, dischargerange }: GetAdmittedPatientsRequest): Observable<Array<AdmittedPatientDTO>>
    getAdmittedPatients({ searchterms, admissionrange, dischargerange }: GetAdmittedPatientsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmittedPatientDTO>>>
    getAdmittedPatients({ searchterms, admissionrange, dischargerange }: GetAdmittedPatientsRequest, opts?: OperationOpts): Observable<Array<AdmittedPatientDTO> | RawAjaxResponse<Array<AdmittedPatientDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (searchterms != null) { query['searchterms'] = searchterms; }
        if (admissionrange != null) { query['admissionrange'] = admissionrange; }
        if (dischargerange != null) { query['dischargerange'] = dischargerange; }

        return this.request<Array<AdmittedPatientDTO>>({
            url: '/admissions/admittedPatients',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getCurrentAdmission({ patientCode }: GetCurrentAdmissionRequest): Observable<AdmissionDTO>
    getCurrentAdmission({ patientCode }: GetCurrentAdmissionRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    getCurrentAdmission({ patientCode }: GetCurrentAdmissionRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getCurrentAdmission');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<AdmissionDTO>({
            url: '/admissions/current',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getDischarges({ dischargerange, page, size }: GetDischargesRequest): Observable<PageAdmissionDTO>
    getDischarges({ dischargerange, page, size }: GetDischargesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PageAdmissionDTO>>
    getDischarges({ dischargerange, page, size }: GetDischargesRequest, opts?: OperationOpts): Observable<PageAdmissionDTO | RawAjaxResponse<PageAdmissionDTO>> {
        throwIfNullOrUndefined(dischargerange, 'dischargerange', 'getDischarges');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'dischargerange': dischargerange,
        };

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }

        return this.request<PageAdmissionDTO>({
            url: '/discharges',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getNextYProg({ wardcode }: GetNextYProgRequest): Observable<number>
    getNextYProg({ wardcode }: GetNextYProgRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getNextYProg({ wardcode }: GetNextYProgRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(wardcode, 'wardcode', 'getNextYProg');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'wardcode': wardcode,
        };

        return this.request<number>({
            url: '/admissions/getNextProgressiveIdInYear',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getUsedWardBed({ wardid }: GetUsedWardBedRequest): Observable<number>
    getUsedWardBed({ wardid }: GetUsedWardBedRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getUsedWardBed({ wardid }: GetUsedWardBedRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(wardid, 'wardid', 'getUsedWardBed');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'wardid': wardid,
        };

        return this.request<number>({
            url: '/admissions/getBedsOccupationInWard',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    newAdmissions({ admissionDTO }: NewAdmissionsRequest): Observable<AdmissionDTO>
    newAdmissions({ admissionDTO }: NewAdmissionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    newAdmissions({ admissionDTO }: NewAdmissionsRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(admissionDTO, 'admissionDTO', 'newAdmissions');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<AdmissionDTO>({
            url: '/admissions',
            method: 'POST',
            headers,
            body: admissionDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateAdmissions({ admissionDTO }: UpdateAdmissionsRequest): Observable<AdmissionDTO>
    updateAdmissions({ admissionDTO }: UpdateAdmissionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    updateAdmissions({ admissionDTO }: UpdateAdmissionsRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(admissionDTO, 'admissionDTO', 'updateAdmissions');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<AdmissionDTO>({
            url: '/admissions',
            method: 'PUT',
            headers,
            body: admissionDTO,
        }, opts?.responseOpts);
    };

}
