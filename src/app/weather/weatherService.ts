import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  constructor(private http: HttpClient) {}
  weatherUrl = '';

  getWeather(): Observable<Weather> {
		return this.http.get<Weather>(this.weatherUrl)
		.pipe(retry(3),
				catchError(this.handleError));
	}
}
