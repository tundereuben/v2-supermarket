import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyAndChewingGumsComponent } from './candy-and-chewing-gums.component';

describe('CandyAndChewingGumsComponent', () => {
  let component: CandyAndChewingGumsComponent;
  let fixture: ComponentFixture<CandyAndChewingGumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyAndChewingGumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyAndChewingGumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
