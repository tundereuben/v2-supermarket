import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFruitsComponent } from './fresh-fruits.component';

describe('FreshFruitsComponent', () => {
  let component: FreshFruitsComponent;
  let fixture: ComponentFixture<FreshFruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshFruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
