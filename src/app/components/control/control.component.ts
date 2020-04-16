import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: 'control.component.html',
  styles: [
  ]
})
export class ControlComponent {
  private Url = 'http://localhost:8008/';

  constructor(private http: HttpClient) { }
  controlForm = new FormGroup({});
  onYeet() {
    this.http.delete(this.Url).subscribe({
      error: error => console.error('There was an error trying to delete!', error)
    });
  }
}
