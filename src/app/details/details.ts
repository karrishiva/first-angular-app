import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../house';
import { HouseLocationInfo } from '../house-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);
  houseService: HouseService = inject(HouseService);
  houseLocation: HouseLocationInfo | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.houseLocation = this.houseService.gethouseLocationById(parseInt(id));
    }
  }

  submitApplication() {
    this.houseService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}




