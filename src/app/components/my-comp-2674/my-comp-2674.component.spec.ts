import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2674Component } from './my-comp-2674.component';

describe('MyComp2674Component', () => {
  let component: MyComp2674Component;
  let fixture: ComponentFixture<MyComp2674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
