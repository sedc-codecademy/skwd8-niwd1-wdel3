import { Component, OnDestroy, OnInit } from '@angular/core';
import { ZooService } from './services/zoo.service';
import { Animal } from './models/animal.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  // appTitle: string = 'Advanced FE Development';
  // animals: Animal[];
  // animalsObs: Observable<Animal[]>;
  // subscription = new Subscription();
  // getAnimalsSubscription: Subscription;

  // constructor(private zooService: ZooService) {}
  constructor() {}

  ngOnInit() {
    // this.subscription.add(
    //   this.zooService.getAnimals().subscribe(animals => {
    //     this.animals = animals;
    //   })
    // )

    // this.getAnimalsSubscription = this.zooService.getAnimals()
    //     .subscribe(animals => {
    //       this.animals = animals;
    //     })

    // this.animalsObs = this.zooService.getAnimals();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.getAnimalsSubscription.unsubscribe();
  }

  // buttonId = 2;
  // name: string = '';
  // age: string = '';
  // isMarried: boolean = false;
  // year: number = 2020;

  // animal = {
  //   name: 'Blacky',
  //   type: 'dog',
  //   tail: true
  // }

  // years = [2001, 2002, 2003, 2004, 2005];

  // logInputValue(event: any) {
  //   console.log(event.target.value);

  //   this.name = event.target.value;
  // }

  // onButtonClicked() {
  //   console.log('App Component - button clicked')

  //   this.name = 'Angular';
  // }

  // onAgeAdded(age: string) {
  //   this.age = age;
  // }
}