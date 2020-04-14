import { Component } from '@angular/core';
import { LogService } from './log.service';
import { SailboatList } from './logModel';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: [
  ]
})
export class LogComponent {
  sailboat: SailboatList;

  constructor(private logService: LogService) {
	  this.logService.getSailboat().subscribe(res => { this.sailboat = res; });
  }
}
