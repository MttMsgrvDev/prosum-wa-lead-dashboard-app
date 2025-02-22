import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { LeadService } from './services/lead/lead.service';
import { Lead } from './models/lead';

/**
 * The main application component.
 */
@Component({
  selector: 'app-root',
  imports: [TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'lead-dashboard-app';

  leads: Lead[] = [];

  /**
   * Creates a new instance of AppComponent.
   * @param leadService Provides services to get lead data.
   */
  constructor(private leadService: LeadService) {

  }

  ngOnInit(): void {
    this.leadService.getLeads()
      .subscribe(leads => {
        this.leads = leads;
      });
  }
}
