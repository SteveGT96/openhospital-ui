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

/**
 * Class representing a Login response
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * Token
     * @type {string}
     * @memberof LoginResponse
     */
    token?: string;
    /**
     * RefreshToken
     * @type {string}
     * @memberof LoginResponse
     */
    refreshToken?: string;
    /**
     * Type of Token
     * @type {string}
     * @memberof LoginResponse
     */
    type?: string;
    /**
     * User name
     * @type {string}
     * @memberof LoginResponse
     */
    username?: string;
}
