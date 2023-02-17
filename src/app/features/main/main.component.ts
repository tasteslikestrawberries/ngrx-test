import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {}

  navigateToCounter() {
    this.router.navigate(['counter']);
  }

  navigateToBooks() {
    this.router.navigate(['books']);
  }

  navigateToTodos() {
    this.router.navigate(['todos']);
  }
}
