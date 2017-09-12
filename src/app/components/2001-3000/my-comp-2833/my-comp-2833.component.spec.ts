import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2833Component } from './my-comp-2833.component';

describe('MyComp2833Component', () => {
  let component: MyComp2833Component;
  let fixture: ComponentFixture<MyComp2833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
