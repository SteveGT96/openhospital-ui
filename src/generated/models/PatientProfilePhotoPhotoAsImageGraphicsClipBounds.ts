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

import {
    PatientProfilePhotoPhotoAsImageGraphicsClipBoundsBounds2D,
    PatientProfilePhotoPhotoAsImageGraphicsClipBoundsLocation,
    PatientProfilePhotoPhotoAsImageGraphicsClipBoundsSize,
} from './';

/**
 * @export
 * @interface PatientProfilePhotoPhotoAsImageGraphicsClipBounds
 */
export interface PatientProfilePhotoPhotoAsImageGraphicsClipBounds {
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    x?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    y?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    width?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    height?: number;
    /**
     * @type {boolean}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    empty?: boolean;
    /**
     * @type {PatientProfilePhotoPhotoAsImageGraphicsClipBoundsLocation}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    location?: PatientProfilePhotoPhotoAsImageGraphicsClipBoundsLocation;
    /**
     * @type {PatientProfilePhotoPhotoAsImageGraphicsClipBoundsSize}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    size?: PatientProfilePhotoPhotoAsImageGraphicsClipBoundsSize;
    /**
     * @type {PatientProfilePhotoPhotoAsImageGraphicsClipBoundsBounds2D}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    bounds2D?: PatientProfilePhotoPhotoAsImageGraphicsClipBoundsBounds2D;
    /**
     * @type {PatientProfilePhotoPhotoAsImageGraphicsClipBoundsBounds2D}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    rect?: PatientProfilePhotoPhotoAsImageGraphicsClipBoundsBounds2D;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    minX?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    minY?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    maxX?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    maxY?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    centerX?: number;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsClipBounds
     */
    centerY?: number;
}
