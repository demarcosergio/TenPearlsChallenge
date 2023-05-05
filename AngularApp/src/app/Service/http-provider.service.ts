import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "https://localhost:7101/api/Contact";

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllContact(): Observable<any> {
    return this.webApiService.get(apiUrl);
  }
  public deleteContactById(model: any): Observable<any> {
    const url = `${apiUrl}?id=${model}`;
    return this.webApiService.delete(url);
  }
  public getContactDetailById(model: any): Observable<any> {
    const url = `${apiUrl}/${model}`;
    return this.webApiService.get(url);
  }
  public editContact(model: any): Observable<any> {
    return this.webApiService.put(apiUrl, model);
  }  
  public saveContact(model: any): Observable<any> {
    return this.webApiService.post(apiUrl, model);
  }  
}                          