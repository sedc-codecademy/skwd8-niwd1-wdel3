import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ZooService } from 'src/app/services/zoo.service';
import { Animal } from '../../models/animal.model';
import { Zookeeper } from '../../models/zookeepers.model';

@Component({
  selector: 'app-zoo-container',
  templateUrl: './zoo-container.component.html',
})

export class ZooContainerComponent implements OnInit, OnDestroy {
  @Input() showPage: string;
  animals: Animal[] = [];
  zookeepers: Zookeeper[] = [];
  subscription = new Subscription();

  constructor(private zooService: ZooService) { }

  ngOnInit() {
    this.zooService.getAnimals();
    this.zooService.getZookeepers();

    this.subscription.add(
      this.zooService.animal.subscribe(animals => {
        console.log('ZooContainerComponent', animals)
        this.animals = animals;
      })
    )

    this.subscription.add(
      this.zooService.zookeepers.subscribe(zookeepers => {
        this.zookeepers = zookeepers;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
