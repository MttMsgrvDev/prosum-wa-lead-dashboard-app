import { Component, Input } from '@angular/core';
import { Lead } from '../../models/lead';

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

}
