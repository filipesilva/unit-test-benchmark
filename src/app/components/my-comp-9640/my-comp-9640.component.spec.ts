import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9640Component } from './my-comp-9640.component';

describe('MyComp9640Component', () => {
  let component: MyComp9640Component;
  let fixture: ComponentFixture<MyComp9640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
