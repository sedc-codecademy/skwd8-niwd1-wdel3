import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class Header {
    @Input() title: string = '';
    @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() ageAdded: EventEmitter<string> = new EventEmitter<string>();

    buttonClickedInView() {
        console.log('buttonClickedInView');

        this.buttonClicked.emit();
    }

    inputAge(event: any) {
        this.ageAdded.emit(event.target.value)
    }
}