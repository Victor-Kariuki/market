import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Trade } from '../../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradesService {

  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * createTrade
   *
   * Initiates a trade
   *
   * @param payload item id, initiator's email, amount
   */
  createTrade(payload) {
    return this.http
      .post(`${this.apiUrl}/trade/open`, payload)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * fetchTrade
   *
   * query trade data by ID
   *
   * @param payload item id
   */
  fetchTrade(payload) {
    return this.http
      // tslint:disable-next-line: no-string-literal
      .get(`${this.apiUrl}/trade/${payload['itemId']}/${payload['status']}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * fetchAccountTrades
   *
   * query and retrieve the user's trades
   *
   * @param payload user's email
   */
  fetchAccountTrades(payload: string) {
    return this.http
      .get(`${this.apiUrl}/trade/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * cancelOpenTrade
   *
   * cancels open trade by its id
   * @param payload trade id
   */
  cancelOpenTrade(payload: string) {
    return this.http
      .get(`${this.apiUrl}/trade/cancel/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * completeOpenTrade
   *
   * complete open trade by its id
   * @param payload trade id
   */
  completeOpenTrade(payload: string) {
    return this.http
      .get(`${this.apiUrl}/trade/complete/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * raiseComplaintOpenTrade
   *
   * raise a complaint on an open trade by its id
   * @param payload trade id
   */
  raiseComplaintOnTrade(payload: string) {
    return this.http
    .get(`${this.apiUrl}/trade/complain/${payload}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  /**
   * fundEscrow
   *
   * fund user's escrow
   *
   * @param payload item id, initiator's email, amount
   */
  fundEscrow(payload: Trade) {
    return this.http
      .post(`${this.apiUrl}/trade/fundescrow`, payload)
      .pipe(
        catchError(this.handleError),
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}
