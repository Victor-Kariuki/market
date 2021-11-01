import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = environment.apiBaseUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) { }

  // query & retrieve all categories.
  fetchCategories() {
    return this.http
      .get(`${this.apiUrl}/category`)
      .pipe(
        catchError(this.handleError),
      );
  }

  // query & retrieve a single category and the ads in the category
  fetchCategory(category: string) {
    return this.http.get(`${this.apiUrl}/category/${category}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // create a new category
  createCategory(payload: Category) {
    return this.http.post(`${this.apiUrl}/category`, payload);
  }


  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
