import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitAndWafersComponent } from './biscuit-and-wafers.component';

describe('BiscuitAndWafersComponent', () => {
  let component: BiscuitAndWafersComponent;
  let fixture: ComponentFixture<BiscuitAndWafersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiscuitAndWafersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiscuitAndWafersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
