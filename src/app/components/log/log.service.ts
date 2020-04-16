import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { SailboatList } from './logModel';

@Injectable({
    providedIn: 'root',
})

export class LogService {
  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8008/';

  getSailboat(): Observable<SailboatList> {
    return this.http.get<SailboatList>(this.Url);
  }

  getSailboatResponse(): Observable<HttpResponse<SailboatList>> {
	  return this.http.get<SailboatList>(
	    this.Url, { observe: 'response' });
  }
}
