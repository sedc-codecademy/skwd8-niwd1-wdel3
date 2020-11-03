import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  appTitle: string = 'Advanced FE Development';

  name: string = '';
  age: string = '';

  logInputValue(event: any) {
    console.log(event.target.value);

    this.name = event.target.value.toUpperCase();
  }

  onButtonClicked() {
    console.log('App Component - button clicked')

    this.name = 'Angular';
  }

  onAgeAdded(age: string) {
    this.age = age;
  }
}