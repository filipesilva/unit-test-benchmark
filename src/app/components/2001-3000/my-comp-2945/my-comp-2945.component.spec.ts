import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2945Component } from './my-comp-2945.component';

describe('MyComp2945Component', () => {
  let component: MyComp2945Component;
  let fixture: ComponentFixture<MyComp2945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
