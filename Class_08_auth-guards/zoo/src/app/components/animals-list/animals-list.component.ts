import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZooService } from 'src/app/services/zoo.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html'
})
export class AnimalsListComponent implements OnInit, OnDestroy {
  animals: Animal[] = [];
  subscription = new Subscription();

  constructor(private zooService: ZooService) { }

  ngOnInit() {
    this.subscription.add(
      this.zooService.animals.subscribe(animals => {
        this.animals = animals
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
