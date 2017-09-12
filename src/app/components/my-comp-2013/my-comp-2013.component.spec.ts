import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2013Component } from './my-comp-2013.component';

describe('MyComp2013Component', () => {
  let component: MyComp2013Component;
  let fixture: ComponentFixture<MyComp2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
