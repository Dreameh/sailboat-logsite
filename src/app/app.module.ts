import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LogComponent } from './components/log/log.component';
import { CoordinatesComponent } from './components/coordinates/coordinates.component';
import { CoordinatesService } from './components/coordinates/coordinates.service';
import { LogService } from './components/log/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogComponent,
    CoordinatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ CoordinatesService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
