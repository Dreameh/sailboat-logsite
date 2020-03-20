import { Component, Injector } from '@angular/core';
import testJson from './_files/testJson.json';
import { AppService } from './app.service';
import { SailboatList } from './model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	sailboat: SailboatList;

	title = 'sailboat-log';
	constructor(private appService: AppService) {
		this.appService.getSailboat().subscribe(res => { this.sailboat = res; });
	}
}
