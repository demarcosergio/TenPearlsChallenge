import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Authorization': environment.API_TOKEN,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
    rejectUnauthorized: false,
    observe: "response" as 'body'
  };

  constructor(private httpClient: HttpClient) { }

  // Get call method
  // Param 1 : url
  get(url: string): Observable<any> {
    return this.httpClient.get(url, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // Put call method 
  // Param 1 : url
  // Param 2 : model
  put(url: string, model: any): Observable<any> {
    return this.httpClient.put(url, model, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // Post call method 
  // Param 1 : url
  // Param 2 : model
  post(url: string, model: any): Observable<any> {
    return this.httpClient.post(url, model, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // Delete call method 
  // Param 1 : url
  delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }
  private ReturnResponseData(response: any) {
    return response;
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
