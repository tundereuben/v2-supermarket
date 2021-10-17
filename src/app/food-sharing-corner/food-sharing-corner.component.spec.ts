import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSharingCornerComponent } from './food-sharing-corner.component';

describe('FoodSharingCornerComponent', () => {
  let component: FoodSharingCornerComponent;
  let fixture: ComponentFixture<FoodSharingCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSharingCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSharingCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
