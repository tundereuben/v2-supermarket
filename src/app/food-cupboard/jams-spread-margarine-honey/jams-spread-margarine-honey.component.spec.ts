import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamsSpreadMargarineHoneyComponent } from './jams-spread-margarine-honey.component';

describe('JamsSpreadMargarineHoneyComponent', () => {
  let component: JamsSpreadMargarineHoneyComponent;
  let fixture: ComponentFixture<JamsSpreadMargarineHoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamsSpreadMargarineHoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamsSpreadMargarineHoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
