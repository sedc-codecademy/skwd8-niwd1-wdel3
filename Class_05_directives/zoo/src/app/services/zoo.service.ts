import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ZooService {

    constructor(private http: HttpClient) {}

    getAnimals(): Observable<any> {
        // console.log('getAnimals');
        return this.http.get('./../../assets/data/animals.json');
    }

    getZookeepers(): Observable<any> {
        return this.http.get('./../../assets/data/zookeepers.json');
    }
}