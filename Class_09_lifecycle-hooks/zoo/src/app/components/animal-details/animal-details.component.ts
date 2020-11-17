import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map, mergeMap } from 'rxjs/operators';
import { Animal } from 'src/app/models/animal.model';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
})
export class AnimalDetailsComponent implements OnInit {

  animalId: string = '';
  animal: Animal;

  constructor(private route: ActivatedRoute, private zooService: ZooService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap((params) => {
        this.animalId = params.get('id');
        return this.zooService.animals;
      }),
      map((animals) =>  animals.find(a => a.id === this.animalId))
    ).subscribe(animal => {
      console.log(animal)
      this.animal = animal;
    })
    
    
    // BAD PRACTISE
    // .subscribe(params => {
    //   console.log(params.get('id'));
    //   this.animalId = params.get('id');

    //   this.zooService.animals.subscribe(animals => {
    //     this.animal = animals.find(a => a.id === this.animalId);
    //     console.log(this.animal)
    //   })
    // })
  }

}
