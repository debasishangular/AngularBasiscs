import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent {
    @Input() cityId: string;
    @Input() cityName: string;
}
