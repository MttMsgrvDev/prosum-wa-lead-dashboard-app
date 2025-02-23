import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { LeadService } from './services/lead/lead.service';
import { Lead } from './models/lead';
import { LeadDetailComponent } from "./components/lead-detail/lead-detail.component";

/**
 * The main application component.
 */
@Component({
  selector: 'app-root',
  imports: [TableModule, DialogModule, LeadDetailComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  /**
   * The title of the application.
   */
  title: string = 'lead-dashboard-app';

  /**
   * Whether or not to show the lead detail dialog box.
   */
  showLeadDetail: boolean = false;

  /**
   * The lead records to be displayed.
   */
  leads: Lead[] = [];

  /**
   * The lead to be displayed in the lead detail dialog.
   */
  lead: Lead | null = null;

  /**
   * Creates a new instance of AppComponent.
   * @param leadService Provides services to get lead data.
   */
  constructor(private leadService: LeadService) {

  }

  /**
   * Initializes the app component.
   */
  ngOnInit(): void {
    this.leadService.getLeads()
      .subscribe(leads => {
        this.leads = leads;
      });
  }

  /**
   * Shows the lead detail dialog box.
   * @param lead The lead to be displayed.
   */
  showLeadDetailDialog(lead: Lead): void {
    this.lead = lead;
    this.showLeadDetail = true;
  }
}
