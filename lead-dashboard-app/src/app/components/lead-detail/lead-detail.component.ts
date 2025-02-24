import { Component, Input } from '@angular/core';
import { Lead } from '../../models/lead';
import dateFormat from 'dateformat';

/**
 * Component that displays the details of a lead.
 */
@Component({
  selector: 'app-lead-detail',
  imports: [],
  templateUrl: './lead-detail.component.html',
  styleUrl: './lead-detail.component.scss'
})
export class LeadDetailComponent {

  /**
   * The lead to be displayed.
   */
  @Input()
  lead: Lead | null = null;

  /**
     * Formats a date into a string.
     * @param date The date to format.
     */
    formatDate(date: Date | undefined) : string {
      return date
        ? dateFormat(date, 'mm/dd/yyyy hh:MM TT')
        : '';
    }
}
