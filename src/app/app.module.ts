import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoordsComponent } from './coords/coords.component';
import { LogComponent } from './log/log.component';
import { CoordsService } from './coords/coords.service';
import { LogService } from './log/log.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: 'coords', component: CoordsComponent },
  { path: 'log', component: LogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoordsComponent,
    LogComponent,
    HeaderComponent,
    FooterComponent,
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
  providers: [ CoordsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
