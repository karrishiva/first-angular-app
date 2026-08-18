import {Component, inject} from '@angular/core';
import { HouseService } from '../house';
import { HouseLocation } from '../house-location/house-location';
import { HouseLocationInfo } from '../house-location';

@Component({
  selector: 'app-home',
  imports: [HouseLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class Home {
  houseLocationList: HouseLocationInfo[] = [];
  houseService: HouseService = inject(HouseService);
  constructor() {
    this.houseLocationList = this.houseService.getAllhouseLocations();
  }
}