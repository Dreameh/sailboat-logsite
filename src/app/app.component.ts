import { Component } from '@angular/core';
import testJson from './_files/testJson.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sailboat-log';
  public testList = testJson;
  public positionList = testJson.position;
}
