import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private PORTFOLIO_URL = `http://localhost:5000/portfolio/`;
  private PORTFOLIO_TIMELINE = `${this.PORTFOLIO_URL}timeline/`;
   
  constructor(private http: HttpClient) { }

  getPortFoliosList(): Observable<any> {
    return this.http.get<any>(this.PORTFOLIO_URL);
  }

  getPortFoliosTimeline(portfolioId:string): Observable<any> {
    return this.http.get<any>(`${this.PORTFOLIO_TIMELINE}${portfolioId}`);
  }
}
