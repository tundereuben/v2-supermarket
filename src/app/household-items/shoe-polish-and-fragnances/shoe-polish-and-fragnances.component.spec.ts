import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoePolishAndFragnancesComponent } from './shoe-polish-and-fragnances.component';

describe('ShoePolishAndFragnancesComponent', () => {
  let component: ShoePolishAndFragnancesComponent;
  let fixture: ComponentFixture<ShoePolishAndFragnancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoePolishAndFragnancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoePolishAndFragnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
