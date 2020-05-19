import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCities() : Observable<City[]> {
    return of([
      {
        id: 1,
        name: "אשדוד",
      },
      {
        id: 2,
        name: "אשקלון",
      },
      {
        id: 3,
        name: "ראשון לציון",
      },
    ]);
  }

  constructor() { }
}
