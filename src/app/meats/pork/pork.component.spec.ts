import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkComponent } from './pork.component';

describe('PorkComponent', () => {
  let component: PorkComponent;
  let fixture: ComponentFixture<PorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
