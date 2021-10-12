import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesAndDairyComponent } from './beverages-and-dairy.component';

describe('BeveragesAndDairyComponent', () => {
  let component: BeveragesAndDairyComponent;
  let fixture: ComponentFixture<BeveragesAndDairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragesAndDairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesAndDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
