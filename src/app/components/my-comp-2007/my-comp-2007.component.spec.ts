import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2007Component } from './my-comp-2007.component';

describe('MyComp2007Component', () => {
  let component: MyComp2007Component;
  let fixture: ComponentFixture<MyComp2007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
