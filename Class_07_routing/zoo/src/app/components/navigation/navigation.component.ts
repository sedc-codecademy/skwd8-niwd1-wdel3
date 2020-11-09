import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  @Output() navClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navLinkClicked(event) {
    console.log('NavigationComponent', event);
    this.navClicked.emit(event)
  }
}
