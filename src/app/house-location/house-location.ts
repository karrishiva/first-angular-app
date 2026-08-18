import {Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HouseLocationInfo } from '../house-location';
@Component({
  selector: 'app-house-location',
  imports: [RouterLink],
  templateUrl: './house-location.html',
  styleUrls: ['./house-location.css'],
})
export class HouseLocation {
  houseLocation = input.required<HouseLocationInfo>();
}