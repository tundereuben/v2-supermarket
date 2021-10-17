import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFreshnersAndFragnancesComponent } from './air-freshners-and-fragnances.component';

describe('AirFreshnersAndFragnancesComponent', () => {
  let component: AirFreshnersAndFragnancesComponent;
  let fixture: ComponentFixture<AirFreshnersAndFragnancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFreshnersAndFragnancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFreshnersAndFragnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
