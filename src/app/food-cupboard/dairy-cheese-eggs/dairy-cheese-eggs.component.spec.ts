import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyCheeseEggsComponent } from './dairy-cheese-eggs.component';

describe('DairyCheeseEggsComponent', () => {
  let component: DairyCheeseEggsComponent;
  let fixture: ComponentFixture<DairyCheeseEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyCheeseEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyCheeseEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
