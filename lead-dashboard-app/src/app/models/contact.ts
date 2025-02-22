import { Entity } from "./entity";

/**
 * Represents a contact.
 * @interface
 */
export interface Contact extends Entity {

    /**
     * The email address of the contact
     * @type {string}
     * @instance
     */
    email: string;

    /**
     * The first name of the contact.
     * @type {string}
     * @instance
     */
    firstName: string;

    /**
     * The last name of the contact.
     * @type {string}
     * @instance
     */
    lastName: string;

    /**
     * The contact's phone number.
     * @type {string}
     * @instance
     */
    phoneNumber: string;

    /**
     * The contact's zip code.
     * @type {string}
     * @instance
     */
    zipCode: string;

    /**
     * Whether or not the contact has given permission to be contacted.
     * @type {string}
     * @instance
     */
    permissionToContact: boolean;
}