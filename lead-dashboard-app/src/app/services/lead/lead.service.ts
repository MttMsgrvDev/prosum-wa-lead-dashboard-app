import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Lead } from '../../models/lead';
import { HttpClient } from '@angular/common/http';

/**
 * Provides data services for leads.
 */
@Injectable({
  providedIn: 'root'
})
export class LeadService {

  /**
   * Creates a new instance of LeadService.
   * @param httpClient Provides http services.
   */
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Provides a list of leads.
   * @returns {Observable<Lead[]>} An observable collection of leads.
   * @instance
   */
  getLeads() : Observable<Lead[]> {
    return this.httpClient.get<Lead[]>('data/lead-data.json');
  }
}
