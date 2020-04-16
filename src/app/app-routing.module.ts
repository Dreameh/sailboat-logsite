import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoordinatesComponent } from './components/coordinates/coordinates.component';
import { LogComponent } from './components/log/log.component';
import { ControlComponent } from './components/control/control.component';


const routes: Routes = [
  {
	  path: '',
	  pathMatch: 'full',
	  component: HomeComponent
  },
  {
	  path: 'boat/coordinates',
	  component: CoordinatesComponent
  },
  {
	  path: 'boat/log',
	  component: LogComponent
  },
  {
    path: 'boat/control',
    component: ControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
