import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesSocketsPlugsAndLightBulbsComponent } from './batteries-sockets-plugs-and-light-bulbs.component';

describe('BatteriesSocketsPlugsAndLightBulbsComponent', () => {
  let component: BatteriesSocketsPlugsAndLightBulbsComponent;
  let fixture: ComponentFixture<BatteriesSocketsPlugsAndLightBulbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriesSocketsPlugsAndLightBulbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriesSocketsPlugsAndLightBulbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
