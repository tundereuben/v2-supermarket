import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenMeatsComponent } from './frozen-meats.component';

describe('FrozenMeatsComponent', () => {
  let component: FrozenMeatsComponent;
  let fixture: ComponentFixture<FrozenMeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenMeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenMeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
