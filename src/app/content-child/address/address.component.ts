import { Component, ContentChild } from '@angular/core';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {
@ContentChild(CityComponent) city: CityComponent;
title = 'Address';
}
