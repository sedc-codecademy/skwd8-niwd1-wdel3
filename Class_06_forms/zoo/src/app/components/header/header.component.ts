import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() navClicked: EventEmitter<string> = new EventEmitter<string>();

    onNavClicked(event: string) {
        console.log('HeaderComponent', event);
        this.navClicked.emit(event)
    }
}