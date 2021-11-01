import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Ad } from '../../models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  apiUrl = environment.apiBaseUrl;
  uploadUrl = environment.uploadApiBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * fetchAds
   *
   * Query and retrieve all ads
   */
  fetchAds() {
    return this.http
      .get(`${this.apiUrl}/events`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * fetchAd
   *
   * Query and retrieve ad by ID
   *
   * @param payload ad id
   */
  fetchAd(payload: string) {
    return this.http
      .get(`${this.apiUrl}/events/item/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

/**
 * createAd
 *
 * Create an Ad
 *
 * @param payload Ad details
 */
  createAd(payload: Ad) {
    const input: any = new FormData();
    input.append('type', payload.type);
    input.append('title', payload.title);
    input.append('condition', payload.condition);
    input.append('category', payload.category);
    input.append('description', payload.description);
    input.append('prize', payload.prize);
    input.append('delivery', payload.delivery);
    input.append('toPayDelivery', payload.toPayDelivery);
    input.append('name', payload.name);
    input.append('city', payload.city);
    input.append('phone', payload.phone);
    input.append('email', payload.email);
    // input.append('status', payload.status);
    // input.append('views', payload.views);

    const files: Array<File> = payload.images;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      input.append('uploads[]', files[i], files[i].name);
    }
    return this.http
      .post(`${this.uploadUrl}/createad`, input)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * fetchUsersAds
   *
   * Query & retrieve ads by the owner's email
   *
   * @param payload user's email
   */
  fetchUserProfile(payload: string) {
    return this.http
      .get(`${this.apiUrl}/events/email/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * fetchCategoryAds
   *
   * Query & retrieve ads by category name
   *
   * @param payload category name
   */
  fetchCategoryAds(payload: string) {
    return this.http
      .get(`${this.apiUrl}/category/${payload}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  /**
   * updateAd
   *
   * update an Ad by it's ID
   *
   * @param payload Ad(interface)
   */
  updateAd(payload: Ad) {
    return this.http
      .put<Ad>(`${this.apiUrl}/events/edit/${payload.itemId}`, payload);
  }

  /**
   * deleteAd
   *
   * Delete an Ad by it's ID
   *
   * @param id ad's id
   */
  deleteAd(id: string) {
    return this.http
      .delete(`${this.apiUrl}/event/delete/${id}`);
  }

  /**
   * updateAdViews
   *
   * Query an ad and update it's view count
   *
   * @param payload ad id
   */
  updateAdViews(payload: string) {
    return this.http
      .get(`${this.apiUrl}/events/addview/${payload}`);
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}
