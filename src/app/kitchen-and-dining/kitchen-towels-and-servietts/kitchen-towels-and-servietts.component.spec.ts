import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTowelsAndServiettsComponent } from './kitchen-towels-and-servietts.component';

describe('KitchenTowelsAndServiettsComponent', () => {
  let component: KitchenTowelsAndServiettsComponent;
  let fixture: ComponentFixture<KitchenTowelsAndServiettsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenTowelsAndServiettsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTowelsAndServiettsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
