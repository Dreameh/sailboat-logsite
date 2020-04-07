import { Component } from '@angular/core';
import { SailboatList } from '../model';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  	sailboat: SailboatList;

	title = 'sailboat-log';
	constructor(private appService: LogService) {
		this.appService.getSailboat().subscribe(res => { this.sailboat = res; });
	}
}
