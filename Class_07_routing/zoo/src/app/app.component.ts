import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  showPage: string = 'animals-list';
  constructor() {}

  onNavClicked(event: string) {
    this.showPage = event;
  }
}