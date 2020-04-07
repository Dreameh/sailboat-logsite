import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoordsComponent } from './coords/coords.component';
import { LogComponent } from './log/log.component';


const appRoutes: Routes = [
  { path: 'coords', component: CoordsComponent },
  { path: 'log', component: LogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoordsComponent,
    LogComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
	  HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
