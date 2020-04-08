import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CoordsService } from './coords.service';
import { Coords } from './Coords';

@Component({
  selector: 'app-coords',
  templateUrl: './coords.component.html',
  styleUrls: ['./coords.component.scss']
})

export class CoordsComponent {
  private coord: Coords;

    constructor( private coordsService: CoordsService) {
    }
  coordForm = new FormGroup({
    latitude: new FormControl(''),
    longitude: new FormControl('')});

  onSubmit() {
    this.coord = this.coordForm.value;
    console.warn(this.coord);
    this.coordsService.addCoords(this.coord);
  }

}
