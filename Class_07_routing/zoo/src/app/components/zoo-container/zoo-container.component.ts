import { Component, OnInit, } from '@angular/core';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-zoo-container',
  templateUrl: './zoo-container.component.html',
})

export class ZooContainerComponent implements OnInit {

  constructor(private zooService: ZooService) { }

  ngOnInit() {
    this.zooService.getAnimals();
    this.zooService.getZookeepers();
  }

}
