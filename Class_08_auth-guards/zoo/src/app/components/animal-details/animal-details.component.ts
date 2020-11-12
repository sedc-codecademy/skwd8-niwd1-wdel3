import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
})
export class AnimalDetailsComponent implements OnInit {

  animalId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.animalId = params.get('id');
    })

    // this.route.params.subscribe(params => {
    //   console.log(params['id'])
    // })
  }

}
