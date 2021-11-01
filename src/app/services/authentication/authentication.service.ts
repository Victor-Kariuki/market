import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

// import login & register models
import { Login } from '../../models/login.model';
import { Register } from '../../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = environment.authApiBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * login
   *
   * authenticate existing users
   *
   * @param payload email, password
   */
  login(payload: Login) {
    return this
      .http.post<Login>(`${this.apiUrl}/auth/signin`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * register
   *
   * create a new user
   *
   * @param payload username, email, phone, password, confirmPassword
   */
  register(payload: Register) {
    return this
      .http.post<Register>(`${this.apiUrl}/auth/signup`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * forgotPassword
   *
   * retrieve user's info
   *
   * @param payload email
   */
  forgotPassword(payload: string) {
    return this
      .http.post(`${this.apiUrl}/auth/forgot`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * logout
   *
   * @param token user token
   */
  logout(token: string) {
    return this.http.post(`${this.apiUrl}/auth/logout`, token);
  }

  /**
   * fetchUserProfile
   *
   * fetch user's profile data by email
   *
   * @param payload email
   */
  fetchUserProfile(payload: string) {
    return this.http
      .post(`${this.apiUrl}/auth/signin/${payload}`, payload)
      .pipe(
        catchError(this.handleError),
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || err);
  }

}
