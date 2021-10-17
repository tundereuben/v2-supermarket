import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitCookiesAndWafersComponent } from './biscuit-cookies-and-wafers.component';

describe('BiscuitCookiesAndWafersComponent', () => {
  let component: BiscuitCookiesAndWafersComponent;
  let fixture: ComponentFixture<BiscuitCookiesAndWafersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiscuitCookiesAndWafersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiscuitCookiesAndWafersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
