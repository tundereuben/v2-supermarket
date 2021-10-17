import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashAndSanitisersComponent } from './handwash-and-sanitisers.component';

describe('HandwashAndSanitisersComponent', () => {
  let component: HandwashAndSanitisersComponent;
  let fixture: ComponentFixture<HandwashAndSanitisersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwashAndSanitisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashAndSanitisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
