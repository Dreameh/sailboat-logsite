import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { SailboatList } from './logModel';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: [
  ]
})
export class LogComponent implements OnInit{
  sailboat: SailboatList;

  constructor(private logService: LogService) {
	  // this.logService.getSailboat().subscribe(res => { this.sailboat = res; });
  }

  ngOnInit() {
    interval(5000).
      pipe(
        startWith(0),
        switchMap(() => this.logService.getSailboat())
      ).subscribe(res => { this.sailboat = res; });
  }
}
