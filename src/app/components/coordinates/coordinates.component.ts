import { Component } from '@angular/core';
import { Coords } from './Coords';
import { CoordinatesService } from './coordinates.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styles: [
  ]
})
export class CoordinatesComponent {
    private coord: Coords;

    constructor(private coordsService: CoordinatesService) {
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
