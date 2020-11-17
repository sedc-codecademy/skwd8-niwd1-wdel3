import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-assign-animals-form',
  templateUrl: './assign-animals-form.component.html',
})
export class AssignAnimalsFormComponent implements OnInit {
  @Input() assignedAnimals: Animal[] = [];
  @Input() allAnimals: Animal[] = [];
  @Output() addAnimal: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAnimal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
