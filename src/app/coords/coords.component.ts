import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coords',
  templateUrl: './coords.component.html',
  styleUrls: ['./coords.component.scss']
})

export class CoordsComponent {
  coordForm = new FormGroup({
    latitude: new FormControl(''),
    longitude: new FormControl('')});
}
