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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    OperationTypeDTO,
} from '../models';

export interface DeleteOperationTypeRequest {
    code: string;
}

export interface NewOperationTypeRequest {
    operationTypeDTO: OperationTypeDTO;
}

export interface UpdateOperationTypesRequest {
    code: string;
    operationTypeDTO: OperationTypeDTO;
}

/**
 * no description
 */
export class OperationsTypesApi extends BaseAPI {

    /**
     */
    deleteOperationType({ code }: DeleteOperationTypeRequest): Observable<boolean>
    deleteOperationType({ code }: DeleteOperationTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteOperationType({ code }: DeleteOperationTypeRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteOperationType');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/operationtypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getOperationTypes(): Observable<Array<OperationTypeDTO>>
    getOperationTypes(opts?: OperationOpts): Observable<RawAjaxResponse<Array<OperationTypeDTO>>>
    getOperationTypes(opts?: OperationOpts): Observable<Array<OperationTypeDTO> | RawAjaxResponse<Array<OperationTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<OperationTypeDTO>>({
            url: '/operationtypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newOperationType({ operationTypeDTO }: NewOperationTypeRequest): Observable<OperationTypeDTO>
    newOperationType({ operationTypeDTO }: NewOperationTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<OperationTypeDTO>>
    newOperationType({ operationTypeDTO }: NewOperationTypeRequest, opts?: OperationOpts): Observable<OperationTypeDTO | RawAjaxResponse<OperationTypeDTO>> {
        throwIfNullOrUndefined(operationTypeDTO, 'operationTypeDTO', 'newOperationType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<OperationTypeDTO>({
            url: '/operationtypes',
            method: 'POST',
            headers,
            body: operationTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateOperationTypes({ code, operationTypeDTO }: UpdateOperationTypesRequest): Observable<OperationTypeDTO>
    updateOperationTypes({ code, operationTypeDTO }: UpdateOperationTypesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<OperationTypeDTO>>
    updateOperationTypes({ code, operationTypeDTO }: UpdateOperationTypesRequest, opts?: OperationOpts): Observable<OperationTypeDTO | RawAjaxResponse<OperationTypeDTO>> {
        throwIfNullOrUndefined(code, 'code', 'updateOperationTypes');
        throwIfNullOrUndefined(operationTypeDTO, 'operationTypeDTO', 'updateOperationTypes');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<OperationTypeDTO>({
            url: '/operationtypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: operationTypeDTO,
        }, opts?.responseOpts);
    };

}
