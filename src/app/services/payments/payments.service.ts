import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Payment } from '../../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  mpesaDeposit(payload: Payment) {
    return this.http
      .post(`${this.apiUrl}/payment/mpesa`, payload)
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
