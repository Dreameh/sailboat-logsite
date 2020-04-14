import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {}
