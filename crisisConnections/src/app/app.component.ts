import { Component } from '@angular/core';
import { CityService } from './services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crisisConnections';

  ngOnInit() {
    this.volunteerTypeService.getCities().subscribe(data => console.log(data));
  }

  constructor(private volunteerTypeService : CityService) {}
}
