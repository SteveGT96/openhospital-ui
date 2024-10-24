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
    PatientDTO,
    VaccineDTO,
} from './';

/**
 * @export
 * @interface PatientVaccineDTO
 */
export interface PatientVaccineDTO {
    /**
     * @type {number}
     * @memberof PatientVaccineDTO
     */
    code?: number;
    /**
     * A progr. in year
     * @type {number}
     * @memberof PatientVaccineDTO
     */
    progr: number;
    /**
     * The vaccine date
     * @type {string}
     * @memberof PatientVaccineDTO
     */
    vaccineDate: string;
    /**
     * @type {PatientDTO}
     * @memberof PatientVaccineDTO
     */
    patient: PatientDTO;
    /**
     * @type {VaccineDTO}
     * @memberof PatientVaccineDTO
     */
    vaccine: VaccineDTO;
    /**
     * Lock
     * @type {number}
     * @memberof PatientVaccineDTO
     */
    lock?: number;
    /**
     * @type {number}
     * @memberof PatientVaccineDTO
     */
    readonly hashCode?: number;
}
