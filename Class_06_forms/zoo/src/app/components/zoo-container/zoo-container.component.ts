import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Animal } from '../../models/animal.model';
import { Zookeeper } from '../../models/zookeepers.model';
import { ZooService } from '../../services/zoo.service';

@Component({
  selector: 'app-zoo-container',
  templateUrl: './zoo-container.component.html',
})

export class ZooContainerComponent implements OnInit, OnDestroy {
  @Input() showPage: string;
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
