import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivesPicklesComponent } from './olives-pickles.component';

describe('OlivesPicklesComponent', () => {
  let component: OlivesPicklesComponent;
  let fixture: ComponentFixture<OlivesPicklesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlivesPicklesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlivesPicklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
