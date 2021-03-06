import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Animal } from '../../models/animal.model';
import { Zookeeper } from '../../models/zookeepers.model';
import { ZooService } from '../../services/zoo.service';

@Component({
  selector: 'app-zoo-container',
  templateUrl: './zoo-container.component.html',
  styleUrls: ['./zoo-container.component.scss']
})

export class ZooContainerComponent implements OnInit, OnDestroy {
  animals: Animal[];
  zookeepers: Observable<Zookeeper[]>;
  subscription = new Subscription();

  constructor(private zooService: ZooService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.zooService.getAnimals().subscribe(animals => {
        this.animals = animals
      })
    )

    this.zookeepers = this.zooService.getZookeepers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
