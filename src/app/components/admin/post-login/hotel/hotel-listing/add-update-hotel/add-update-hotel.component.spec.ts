import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateHotelComponent } from './add-update-hotel.component';

describe('AddUpdateHotelComponent', () => {
  let component: AddUpdateHotelComponent;
  let fixture: ComponentFixture<AddUpdateHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
