import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9945Component } from './my-comp-9945.component';

describe('MyComp9945Component', () => {
  let component: MyComp9945Component;
  let fixture: ComponentFixture<MyComp9945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
