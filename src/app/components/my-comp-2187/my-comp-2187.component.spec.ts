import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2187Component } from './my-comp-2187.component';

describe('MyComp2187Component', () => {
  let component: MyComp2187Component;
  let fixture: ComponentFixture<MyComp2187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
