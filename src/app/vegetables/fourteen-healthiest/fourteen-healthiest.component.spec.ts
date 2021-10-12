import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenHealthiestComponent } from './fourteen-healthiest.component';

describe('FourteenHealthiestComponent', () => {
  let component: FourteenHealthiestComponent;
  let fixture: ComponentFixture<FourteenHealthiestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourteenHealthiestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourteenHealthiestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
