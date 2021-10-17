import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarSweetnersVinegarComponent } from './sugar-sweetners-vinegar.component';

describe('SugarSweetnersVinegarComponent', () => {
  let component: SugarSweetnersVinegarComponent;
  let fixture: ComponentFixture<SugarSweetnersVinegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarSweetnersVinegarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarSweetnersVinegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
