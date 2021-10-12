import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingGiftComponent } from './wedding-gift.component';

describe('WeddingGiftComponent', () => {
  let component: WeddingGiftComponent;
  let fixture: ComponentFixture<WeddingGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
