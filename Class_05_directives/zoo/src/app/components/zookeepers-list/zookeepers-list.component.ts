import { Component, Input, OnInit } from '@angular/core';
import { Zookeeper } from '../../models/zookeepers.model';

@Component({
  selector: 'app-zookeepers-list',
  templateUrl: './zookeepers-list.component.html',
  styleUrls: ['./zookeepers-list.component.scss']
})
export class ZookeepersListComponent implements OnInit {
  @Input() zookeepers: Observable<Zookeeper[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
