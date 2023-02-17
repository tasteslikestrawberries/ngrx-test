import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-test';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['home']);
  }

  isHomeRoute() {
    return this.router.url === '/';
  }
}
