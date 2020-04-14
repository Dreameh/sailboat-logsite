import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coords } from './Coords';
import { next } from 'rxjs/operators';

@Injectable()
export class CoordinatesService {
  coordsUrl = 'http://localhost:8008/';
  constructor(private http: HttpClient) { }

  addCoords(body: Coords) {
    return this.http.post(this.coordsUrl,body, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }).next(data=>
      data);
  }
}
