import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedFoodsComponent } from './canned-foods.component';

describe('CannedFoodsComponent', () => {
  let component: CannedFoodsComponent;
  let fixture: ComponentFixture<CannedFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannedFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
