import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustardJellyPapComponent } from './custard-jelly-pap.component';

describe('CustardJellyPapComponent', () => {
  let component: CustardJellyPapComponent;
  let fixture: ComponentFixture<CustardJellyPapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustardJellyPapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustardJellyPapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
