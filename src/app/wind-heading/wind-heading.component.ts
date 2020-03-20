import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wind-heading',
  templateUrl: './wind-heading.component.html',
  styleUrls: ['./wind-heading.component.scss']
})
export class WindHeadingComponent {
  headingForm = new FormGroup({
    heading: new FormControl(''),
  });
  updateHeading() {}
}
