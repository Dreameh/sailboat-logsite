import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { SailboatList} from './model';

@Injectable({
	providedIn: 'root',
})
export class AppService {
	constructor(private http: HttpClient) { }
	sailboatUrl = 'assets/testJson.json';

	getSailboat(): Observable<SailboatList> {
		return this.http.get<SailboatList>(this.sailboatUrl)
		.pipe(retry(3),
				catchError(this.handleError));
	}
	getSailboatResponse(): Observable<HttpResponse<SailboatList>> {
		return this.http.get<SailboatList>(
			this.sailboatUrl, { observe: 'response' });
	}

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
}
