import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html'
})
export class AddAnimalFormComponent implements OnInit {
  animalForm: FormGroup;

  get nameValid() {
    return this.animalForm.get('name').invalid && (this.animalForm.get('name').touched || this.animalForm.get('name').dirty);
  }

  get speciesValid() {
    return this.animalForm.get('species').invalid && (this.animalForm.get('species').touched || this.animalForm.get('species').dirty);
  }

  get countryValid() {
    return this.animalForm.get('country').invalid && (this.animalForm.get('country').touched || this.animalForm.get('country').dirty);
  }

  get imageUrlValid() {
    return this.animalForm.get('imageUrl').invalid && (this.animalForm.get('imageUrl').touched || this.animalForm.get('imageUrl').dirty);
  }

  get genderValid() {
    return this.animalForm.get('gender').invalid && (this.animalForm.get('gender').touched || this.animalForm.get('gender').dirty);
  }

  constructor(private fb: FormBuilder, private zooService: ZooService, private router: Router) {}

  ngOnInit() {
    this.animalForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(12)])],
      species: ['', Validators.required],
      country: ['', Validators.maxLength(10)],
      imageUrl: ['', Validators.minLength(3)],
      gender: ['', Validators.required],
    })
  }

  onSubmit() {
    this.zooService.addAnimal(this.animalForm.value);
    // this.router.navigate(['/animals'])
    this.router.navigateByUrl('/zoo/animals');
  }
}
