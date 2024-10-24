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
    GroupPermissionsDTO,
    PermissionDTO,
    UserGroupDTO,
} from '../models';

export interface AssignPermissionRequest {
    groupCode: string;
    id: number;
}

export interface DeleteGroupRequest {
    groupCode: string;
}

export interface GetUserGroupRequest {
    groupCode: string;
}

export interface NewUserGroupRequest {
    userGroupDTO: UserGroupDTO;
}

export interface ReplaceGroupPermissionsRequest {
    groupCode: string;
    groupPermissionsDTO: GroupPermissionsDTO;
}

export interface RevokePermissionRequest {
    groupCode: string;
    id: number;
}

export interface UpdateGroupPermissionsRequest {
    groupCode: string;
    groupPermissionsDTO: GroupPermissionsDTO;
}

export interface UpdateUserGroupRequest {
    groupCode: string;
    userGroupDTO: UserGroupDTO;
}

/**
 * no description
 */
export class UserGroupsApi extends BaseAPI {

    /**
     */
    assignPermission({ groupCode, id }: AssignPermissionRequest): Observable<number>
    assignPermission({ groupCode, id }: AssignPermissionRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    assignPermission({ groupCode, id }: AssignPermissionRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'assignPermission');
        throwIfNullOrUndefined(id, 'id', 'assignPermission');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<number>({
            url: '/usergroups/{group_code}/permissions/{id}'.replace('{group_code}', encodeURI(groupCode)).replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteGroup({ groupCode }: DeleteGroupRequest): Observable<void>
    deleteGroup({ groupCode }: DeleteGroupRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    deleteGroup({ groupCode }: DeleteGroupRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'deleteGroup');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            url: '/usergroups/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getUserGroup({ groupCode }: GetUserGroupRequest): Observable<UserGroupDTO>
    getUserGroup({ groupCode }: GetUserGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserGroupDTO>>
    getUserGroup({ groupCode }: GetUserGroupRequest, opts?: OperationOpts): Observable<UserGroupDTO | RawAjaxResponse<UserGroupDTO>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'getUserGroup');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserGroupDTO>({
            url: '/usergroups/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getUserGroups(): Observable<Array<UserGroupDTO>>
    getUserGroups(opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserGroupDTO>>>
    getUserGroups(opts?: OperationOpts): Observable<Array<UserGroupDTO> | RawAjaxResponse<Array<UserGroupDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<UserGroupDTO>>({
            url: '/usergroups',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newUserGroup({ userGroupDTO }: NewUserGroupRequest): Observable<UserGroupDTO>
    newUserGroup({ userGroupDTO }: NewUserGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserGroupDTO>>
    newUserGroup({ userGroupDTO }: NewUserGroupRequest, opts?: OperationOpts): Observable<UserGroupDTO | RawAjaxResponse<UserGroupDTO>> {
        throwIfNullOrUndefined(userGroupDTO, 'userGroupDTO', 'newUserGroup');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserGroupDTO>({
            url: '/usergroups',
            method: 'POST',
            headers,
            body: userGroupDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    replaceGroupPermissions({ groupCode, groupPermissionsDTO }: ReplaceGroupPermissionsRequest): Observable<Array<PermissionDTO>>
    replaceGroupPermissions({ groupCode, groupPermissionsDTO }: ReplaceGroupPermissionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PermissionDTO>>>
    replaceGroupPermissions({ groupCode, groupPermissionsDTO }: ReplaceGroupPermissionsRequest, opts?: OperationOpts): Observable<Array<PermissionDTO> | RawAjaxResponse<Array<PermissionDTO>>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'replaceGroupPermissions');
        throwIfNullOrUndefined(groupPermissionsDTO, 'groupPermissionsDTO', 'replaceGroupPermissions');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<PermissionDTO>>({
            url: '/usergroups/{group_code}/permissions'.replace('{group_code}', encodeURI(groupCode)),
            method: 'PATCH',
            headers,
            body: groupPermissionsDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    revokePermission({ groupCode, id }: RevokePermissionRequest): Observable<void>
    revokePermission({ groupCode, id }: RevokePermissionRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    revokePermission({ groupCode, id }: RevokePermissionRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'revokePermission');
        throwIfNullOrUndefined(id, 'id', 'revokePermission');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            url: '/usergroups/{group_code}/permissions/{id}'.replace('{group_code}', encodeURI(groupCode)).replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    updateGroupPermissions({ groupCode, groupPermissionsDTO }: UpdateGroupPermissionsRequest): Observable<Array<PermissionDTO>>
    updateGroupPermissions({ groupCode, groupPermissionsDTO }: UpdateGroupPermissionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PermissionDTO>>>
    updateGroupPermissions({ groupCode, groupPermissionsDTO }: UpdateGroupPermissionsRequest, opts?: OperationOpts): Observable<Array<PermissionDTO> | RawAjaxResponse<Array<PermissionDTO>>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'updateGroupPermissions');
        throwIfNullOrUndefined(groupPermissionsDTO, 'groupPermissionsDTO', 'updateGroupPermissions');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<PermissionDTO>>({
            url: '/usergroups/{group_code}/permissions'.replace('{group_code}', encodeURI(groupCode)),
            method: 'PUT',
            headers,
            body: groupPermissionsDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateUserGroup({ groupCode, userGroupDTO }: UpdateUserGroupRequest): Observable<UserGroupDTO>
    updateUserGroup({ groupCode, userGroupDTO }: UpdateUserGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserGroupDTO>>
    updateUserGroup({ groupCode, userGroupDTO }: UpdateUserGroupRequest, opts?: OperationOpts): Observable<UserGroupDTO | RawAjaxResponse<UserGroupDTO>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'updateUserGroup');
        throwIfNullOrUndefined(userGroupDTO, 'userGroupDTO', 'updateUserGroup');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserGroupDTO>({
            url: '/usergroups/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'PUT',
            headers,
            body: userGroupDTO,
        }, opts?.responseOpts);
    };

}
