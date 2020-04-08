import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Coords } from './Coords';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class CoordsService {
  coordsUrl = '';
  constructor(private http: HttpClient) {}


	private handleError(error: HttpErrorResponse) {
		if(error.error instanceof ErrorEvent) {
			console.error('An error occurred: ', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				  `body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}

  addCoords(coords: Coords): Observable<Coords> {
    return this.http.post<Coords>(this.coordsUrl, coords, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
