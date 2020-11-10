import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { Zookeeper } from '../models/zookeepers.model';
import { ZooRepoService } from './zoo-repo.service';

@Injectable({
    providedIn: 'root'
})

export class ZooService {
    private _animals: BehaviorSubject<Animal[]> = new BehaviorSubject<Animal[]>([]);
    private _zookeepers: BehaviorSubject<Zookeeper[]> = new BehaviorSubject<Zookeeper[]>([]);

    get animal(): Observable<Animal[]> {
        return this._animals.asObservable()
    }

    get zookeepers(): Observable<Zookeeper[]> {
        return this._zookeepers.asObservable()
    }
    
    constructor(private zooRepoService: ZooRepoService) {}


    getAnimals() {
        this.zooRepoService.getAnimals().subscribe(animals => {
            // console.log('zooRepoService.getAnimals()', animals)
            this._animals.next(animals);
        });
    }
    
    getZookeepers() {
        this.zooRepoService.getZookeepers().subscribe(zookeepers => {
            this._zookeepers.next(zookeepers);
        });
    }
}