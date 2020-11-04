import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html'
})
export class AnimalsListComponent implements OnInit {
  @Input() animals: Animal[];

  constructor() { }

  ngOnInit(): void {
  }

}
