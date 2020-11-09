import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  showPage: string = 'add-animal-form';
  constructor() {}

  onNavClicked(event: string) {
    console.log('AppComponent', event);
    this.showPage = event;
  }
}