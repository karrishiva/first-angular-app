import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLocation } from './house-location';

describe('HouseLocation', () => {
  let component: HouseLocation;
  let fixture: ComponentFixture<HouseLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
