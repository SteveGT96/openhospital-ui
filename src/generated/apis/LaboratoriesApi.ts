// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    LabWithRowsDTO,
    LaboratoryDTO,
    PageLabWithRowsDTO,
} from '../models';

export interface DeleteExamRequest {
    code: number;
}

export interface DeleteExamRequestRequest {
    code: number;
}

export interface GetExamByIdRequest {
    code: number;
}

export interface GetExamWithRowsByIdRequest {
    code: number;
}

export interface GetLaboratoryRequest {
    oneWeek: boolean;
    page: number;
    size: number;
}

export interface GetLaboratory1Request {
    patId: number;
}

export interface GetLaboratoryExamRequest1Request {
    patId: number;
}

export interface GetLaboratoryForPrintRequest {
    dateFrom: string;
    dateTo: string;
    examName?: string;
    patientCode?: number;
    status?: string;
    page?: number;
    size?: number;
    paged?: boolean;
}

export interface NewExamRequestRequest {
    laboratoryDTO: LaboratoryDTO;
}

export interface NewLaboratoryRequest {
    labWithRowsDTO: LabWithRowsDTO;
}

export interface NewLaboratory2Request {
    labWithRowsDTO: Array<LabWithRowsDTO>;
}

export interface UpdateExamRequestRequest {
    code: number;
    status: string;
}

export interface UpdateLaboratoryRequest {
    code: number;
    labWithRowsDTO: LabWithRowsDTO;
}

/**
 * no description
 */
export class LaboratoriesApi extends BaseAPI {

    /**
     */
    deleteExam({ code }: DeleteExamRequest): Observable<boolean>
    deleteExam({ code }: DeleteExamRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteExam({ code }: DeleteExamRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteExam');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteExamRequest({ code }: DeleteExamRequestRequest): Observable<boolean>
    deleteExamRequest({ code }: DeleteExamRequestRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteExamRequest({ code }: DeleteExamRequestRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteExamRequest');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories/examRequest/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getExamById({ code }: GetExamByIdRequest): Observable<LaboratoryDTO>
    getExamById({ code }: GetExamByIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<LaboratoryDTO>>
    getExamById({ code }: GetExamByIdRequest, opts?: OperationOpts): Observable<LaboratoryDTO | RawAjaxResponse<LaboratoryDTO>> {
        throwIfNullOrUndefined(code, 'code', 'getExamById');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<LaboratoryDTO>({
            url: '/laboratories/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getExamWithRowsById({ code }: GetExamWithRowsByIdRequest): Observable<LabWithRowsDTO>
    getExamWithRowsById({ code }: GetExamWithRowsByIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<LabWithRowsDTO>>
    getExamWithRowsById({ code }: GetExamWithRowsByIdRequest, opts?: OperationOpts): Observable<LabWithRowsDTO | RawAjaxResponse<LabWithRowsDTO>> {
        throwIfNullOrUndefined(code, 'code', 'getExamWithRowsById');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<LabWithRowsDTO>({
            url: '/laboratories/exams/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLaboratory({ oneWeek, page, size }: GetLaboratoryRequest): Observable<PageLabWithRowsDTO>
    getLaboratory({ oneWeek, page, size }: GetLaboratoryRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PageLabWithRowsDTO>>
    getLaboratory({ oneWeek, page, size }: GetLaboratoryRequest, opts?: OperationOpts): Observable<PageLabWithRowsDTO | RawAjaxResponse<PageLabWithRowsDTO>> {
        throwIfNullOrUndefined(oneWeek, 'oneWeek', 'getLaboratory');
        throwIfNullOrUndefined(page, 'page', 'getLaboratory');
        throwIfNullOrUndefined(size, 'size', 'getLaboratory');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'oneWeek': oneWeek,
            'page': page,
            'size': size,
        };

        return this.request<PageLabWithRowsDTO>({
            url: '/laboratories',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getLaboratory1({ patId }: GetLaboratory1Request): Observable<Array<LabWithRowsDTO>>
    getLaboratory1({ patId }: GetLaboratory1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<LabWithRowsDTO>>>
    getLaboratory1({ patId }: GetLaboratory1Request, opts?: OperationOpts): Observable<Array<LabWithRowsDTO> | RawAjaxResponse<Array<LabWithRowsDTO>>> {
        throwIfNullOrUndefined(patId, 'patId', 'getLaboratory1');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<LabWithRowsDTO>>({
            url: '/laboratories/byPatientId/{patId}'.replace('{patId}', encodeURI(patId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLaboratoryExamRequest(): Observable<Array<LaboratoryDTO>>
    getLaboratoryExamRequest(opts?: OperationOpts): Observable<RawAjaxResponse<Array<LaboratoryDTO>>>
    getLaboratoryExamRequest(opts?: OperationOpts): Observable<Array<LaboratoryDTO> | RawAjaxResponse<Array<LaboratoryDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<LaboratoryDTO>>({
            url: '/laboratories/examRequest',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLaboratoryExamRequest1({ patId }: GetLaboratoryExamRequest1Request): Observable<Array<LaboratoryDTO>>
    getLaboratoryExamRequest1({ patId }: GetLaboratoryExamRequest1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<LaboratoryDTO>>>
    getLaboratoryExamRequest1({ patId }: GetLaboratoryExamRequest1Request, opts?: OperationOpts): Observable<Array<LaboratoryDTO> | RawAjaxResponse<Array<LaboratoryDTO>>> {
        throwIfNullOrUndefined(patId, 'patId', 'getLaboratoryExamRequest1');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<LaboratoryDTO>>({
            url: '/laboratories/examRequest/patient/{patId}'.replace('{patId}', encodeURI(patId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLaboratoryForPrint({ dateFrom, dateTo, examName, patientCode, status, page, size, paged }: GetLaboratoryForPrintRequest): Observable<PageLabWithRowsDTO>
    getLaboratoryForPrint({ dateFrom, dateTo, examName, patientCode, status, page, size, paged }: GetLaboratoryForPrintRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PageLabWithRowsDTO>>
    getLaboratoryForPrint({ dateFrom, dateTo, examName, patientCode, status, page, size, paged }: GetLaboratoryForPrintRequest, opts?: OperationOpts): Observable<PageLabWithRowsDTO | RawAjaxResponse<PageLabWithRowsDTO>> {
        throwIfNullOrUndefined(dateFrom, 'dateFrom', 'getLaboratoryForPrint');
        throwIfNullOrUndefined(dateTo, 'dateTo', 'getLaboratoryForPrint');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'dateFrom': dateFrom,
            'dateTo': dateTo,
        };

        if (examName != null) { query['examName'] = examName; }
        if (patientCode != null) { query['patientCode'] = patientCode; }
        if (status != null) { query['status'] = status; }
        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }
        if (paged != null) { query['paged'] = paged; }

        return this.request<PageLabWithRowsDTO>({
            url: '/laboratories/exams',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getMaterials(): Observable<Array<string>>
    getMaterials(opts?: OperationOpts): Observable<RawAjaxResponse<Array<string>>>
    getMaterials(opts?: OperationOpts): Observable<Array<string> | RawAjaxResponse<Array<string>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<string>>({
            url: '/laboratories/materials',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newExamRequest({ laboratoryDTO }: NewExamRequestRequest): Observable<boolean>
    newExamRequest({ laboratoryDTO }: NewExamRequestRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newExamRequest({ laboratoryDTO }: NewExamRequestRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(laboratoryDTO, 'laboratoryDTO', 'newExamRequest');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories/examRequest',
            method: 'POST',
            headers,
            body: laboratoryDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    newLaboratory({ labWithRowsDTO }: NewLaboratoryRequest): Observable<boolean>
    newLaboratory({ labWithRowsDTO }: NewLaboratoryRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newLaboratory({ labWithRowsDTO }: NewLaboratoryRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(labWithRowsDTO, 'labWithRowsDTO', 'newLaboratory');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories',
            method: 'POST',
            headers,
            body: labWithRowsDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    newLaboratory2({ labWithRowsDTO }: NewLaboratory2Request): Observable<boolean>
    newLaboratory2({ labWithRowsDTO }: NewLaboratory2Request, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newLaboratory2({ labWithRowsDTO }: NewLaboratory2Request, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(labWithRowsDTO, 'labWithRowsDTO', 'newLaboratory2');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories/insertList',
            method: 'POST',
            headers,
            body: labWithRowsDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateExamRequest({ code, status }: UpdateExamRequestRequest): Observable<boolean>
    updateExamRequest({ code, status }: UpdateExamRequestRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    updateExamRequest({ code, status }: UpdateExamRequestRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'updateExamRequest');
        throwIfNullOrUndefined(status, 'status', 'updateExamRequest');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'status': status,
        };

        return this.request<boolean>({
            url: '/laboratories/examRequest/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    updateLaboratory({ code, labWithRowsDTO }: UpdateLaboratoryRequest): Observable<boolean>
    updateLaboratory({ code, labWithRowsDTO }: UpdateLaboratoryRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    updateLaboratory({ code, labWithRowsDTO }: UpdateLaboratoryRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'updateLaboratory');
        throwIfNullOrUndefined(labWithRowsDTO, 'labWithRowsDTO', 'updateLaboratory');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/laboratories/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: labWithRowsDTO,
        }, opts?.responseOpts);
    };

}
