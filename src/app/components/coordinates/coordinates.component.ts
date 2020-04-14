import { Component } from '@angular/core';
import { Coords } from './Coords';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styles: [
  ]
})
export class CoordinatesComponent {
  private coord: Coords;
  private coordsUrl = 'http://localhost:8008/';

  constructor(private http: HttpClient) {}
  coordForm = new FormGroup({
	  latitude: new FormControl(''),
	  longitude: new FormControl('')});

  onSubmit() {
	  this.coord = this.coordForm.value;
	  console.warn(this.coord);
    this.http.post(this.coordsUrl,this.coord, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }).subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)
    });

  }
}
