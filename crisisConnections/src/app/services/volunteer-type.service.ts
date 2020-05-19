import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VolunteerType } from '../models/volunteer-type';

@Injectable({
  providedIn: 'root'
})
export class VolunteerTypeService {

  getVolunteerTypes() : Observable<VolunteerType[]> {
    return of([{
        id: 1,
        name: "עזרה לקשישים",
      },
      {
        id: 2,
        name: "קניית תרופות",
      },
      {
        id: 3,
        name: "אריזת מזון",
      },
    ]);
  }

  constructor() { }
}
