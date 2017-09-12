import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7170Component } from './my-comp-7170.component';

describe('MyComp7170Component', () => {
  let component: MyComp7170Component;
  let fixture: ComponentFixture<MyComp7170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
