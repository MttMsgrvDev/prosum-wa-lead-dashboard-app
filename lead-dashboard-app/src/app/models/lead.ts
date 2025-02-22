import { Contact } from "./contact";
import { Entity } from "./entity";

/**
 * Represents a lead.
 * @interface
 */
export interface Lead extends Entity {

    /**
     * The contact associated with the lead.
     * @type {Contact}
     * @instance
     */
    contact: Contact;

    /**
     * The source of the lead.
     * @type {string}
     * @instance
     */
    source: string;

    /**
     * The subject line for the lead.
     * @type {string}
     * @instance
     */
    subject: string;

    /**
     * The message for the leqad.
     * @type {string}
     * @instance
     */
    message: string;

    /**
     * The date the lead was created.
     * @type {Date}
     * @instance
     */
    createdDate: Date;
}