import { Component, Input, OnInit } from '@angular/core';
import { Zookeeper } from '../../models/zookeepers.model';

@Component({
  selector: 'app-zookeepers-list',
  templateUrl: './zookeepers-list.component.html',
})
export class ZookeepersListComponent implements OnInit {
  @Input() zookeepers: Zookeeper[];

  constructor() { }

  ngOnInit(): void {
  }

}
