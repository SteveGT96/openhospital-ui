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
    LitePermissionDTO,
    UserDTO,
    UserGroupDTO,
    UserMenuItemDTO,
    UserProfileDTO,
} from '../models';

export interface DeleteGroupRequest {
    groupCode: string;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetGroupMenuRequest {
    groupCode: string;
}

export interface GetMenuRequest {
    username: string;
}

export interface GetUserRequest {
    groupId?: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface NewUserRequest {
    userDTO: UserDTO;
}

export interface NewUserGroupRequest {
    userGroupDTO: UserGroupDTO;
}

export interface RetrievePermissionsByUsernameRequest {
    username: string;
}

export interface SetGroupMenuRequest {
    groupCode: string;
    userMenuItemDTO: Array<UserMenuItemDTO>;
}

export interface UpdateUserRequest {
    userDTO: UserDTO;
    password?: boolean;
}

export interface UpdateUserGroupRequest {
    userGroupDTO: UserGroupDTO;
}

/**
 * no description
 */
export class UsersApi extends BaseAPI {

    /**
     */
    deleteGroup({ groupCode }: DeleteGroupRequest): Observable<boolean>
    deleteGroup({ groupCode }: DeleteGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteGroup({ groupCode }: DeleteGroupRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'deleteGroup');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users/groups/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteUser({ username }: DeleteUserRequest): Observable<boolean>
    deleteUser({ username }: DeleteUserRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteUser({ username }: DeleteUserRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(username, 'username', 'deleteUser');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users/{username}'.replace('{username}', encodeURI(username)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getGroupMenu({ groupCode }: GetGroupMenuRequest): Observable<Array<UserMenuItemDTO>>
    getGroupMenu({ groupCode }: GetGroupMenuRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserMenuItemDTO>>>
    getGroupMenu({ groupCode }: GetGroupMenuRequest, opts?: OperationOpts): Observable<Array<UserMenuItemDTO> | RawAjaxResponse<Array<UserMenuItemDTO>>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'getGroupMenu');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<UserMenuItemDTO>>({
            url: '/users/group-menus/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getMenu({ username }: GetMenuRequest): Observable<Array<UserMenuItemDTO>>
    getMenu({ username }: GetMenuRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserMenuItemDTO>>>
    getMenu({ username }: GetMenuRequest, opts?: OperationOpts): Observable<Array<UserMenuItemDTO> | RawAjaxResponse<Array<UserMenuItemDTO>>> {
        throwIfNullOrUndefined(username, 'username', 'getMenu');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<UserMenuItemDTO>>({
            url: '/users/menus/{username}'.replace('{username}', encodeURI(username)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getUser({ groupId }: GetUserRequest): Observable<Array<UserDTO>>
    getUser({ groupId }: GetUserRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserDTO>>>
    getUser({ groupId }: GetUserRequest, opts?: OperationOpts): Observable<Array<UserDTO> | RawAjaxResponse<Array<UserDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (groupId != null) { query['group_id'] = groupId; }

        return this.request<Array<UserDTO>>({
            url: '/users',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getUserByName({ username }: GetUserByNameRequest): Observable<UserDTO>
    getUserByName({ username }: GetUserByNameRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDTO>>
    getUserByName({ username }: GetUserByNameRequest, opts?: OperationOpts): Observable<UserDTO | RawAjaxResponse<UserDTO>> {
        throwIfNullOrUndefined(username, 'username', 'getUserByName');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserDTO>({
            url: '/users/{username}'.replace('{username}', encodeURI(username)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getUserGroup(): Observable<Array<UserGroupDTO>>
    getUserGroup(opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserGroupDTO>>>
    getUserGroup(opts?: OperationOpts): Observable<Array<UserGroupDTO> | RawAjaxResponse<Array<UserGroupDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<UserGroupDTO>>({
            url: '/users/groups',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newUser({ userDTO }: NewUserRequest): Observable<boolean>
    newUser({ userDTO }: NewUserRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newUser({ userDTO }: NewUserRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(userDTO, 'userDTO', 'newUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users',
            method: 'POST',
            headers,
            body: userDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    newUserGroup({ userGroupDTO }: NewUserGroupRequest): Observable<boolean>
    newUserGroup({ userGroupDTO }: NewUserGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newUserGroup({ userGroupDTO }: NewUserGroupRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(userGroupDTO, 'userGroupDTO', 'newUserGroup');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users/groups',
            method: 'POST',
            headers,
            body: userGroupDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    retrievePermissionsByCurrentLoggedInUser(): Observable<Array<LitePermissionDTO>>
    retrievePermissionsByCurrentLoggedInUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<LitePermissionDTO>>>
    retrievePermissionsByCurrentLoggedInUser(opts?: OperationOpts): Observable<Array<LitePermissionDTO> | RawAjaxResponse<Array<LitePermissionDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<LitePermissionDTO>>({
            url: '/users/permissions',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    retrievePermissionsByUsername({ username }: RetrievePermissionsByUsernameRequest): Observable<Array<LitePermissionDTO>>
    retrievePermissionsByUsername({ username }: RetrievePermissionsByUsernameRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<LitePermissionDTO>>>
    retrievePermissionsByUsername({ username }: RetrievePermissionsByUsernameRequest, opts?: OperationOpts): Observable<Array<LitePermissionDTO> | RawAjaxResponse<Array<LitePermissionDTO>>> {
        throwIfNullOrUndefined(username, 'username', 'retrievePermissionsByUsername');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<LitePermissionDTO>>({
            url: '/users/permissions/username/{username}'.replace('{username}', encodeURI(username)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    retrieveProfileByCurrentLoggedInUser(): Observable<UserProfileDTO>
    retrieveProfileByCurrentLoggedInUser(opts?: OperationOpts): Observable<RawAjaxResponse<UserProfileDTO>>
    retrieveProfileByCurrentLoggedInUser(opts?: OperationOpts): Observable<UserProfileDTO | RawAjaxResponse<UserProfileDTO>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserProfileDTO>({
            url: '/users/me',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    setGroupMenu({ groupCode, userMenuItemDTO }: SetGroupMenuRequest): Observable<boolean>
    setGroupMenu({ groupCode, userMenuItemDTO }: SetGroupMenuRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    setGroupMenu({ groupCode, userMenuItemDTO }: SetGroupMenuRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(groupCode, 'groupCode', 'setGroupMenu');
        throwIfNullOrUndefined(userMenuItemDTO, 'userMenuItemDTO', 'setGroupMenu');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users/groups/{group_code}'.replace('{group_code}', encodeURI(groupCode)),
            method: 'POST',
            headers,
            body: userMenuItemDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateUser({ userDTO, password }: UpdateUserRequest): Observable<boolean>
    updateUser({ userDTO, password }: UpdateUserRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    updateUser({ userDTO, password }: UpdateUserRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(userDTO, 'userDTO', 'updateUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (password != null) { query['password'] = password; }

        return this.request<boolean>({
            url: '/users',
            method: 'PUT',
            headers,
            query,
            body: userDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateUserGroup({ userGroupDTO }: UpdateUserGroupRequest): Observable<boolean>
    updateUserGroup({ userGroupDTO }: UpdateUserGroupRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    updateUserGroup({ userGroupDTO }: UpdateUserGroupRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(userGroupDTO, 'userGroupDTO', 'updateUserGroup');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/users/groups',
            method: 'PUT',
            headers,
            body: userGroupDTO,
        }, opts?.responseOpts);
    };

}
