import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2362Component } from './my-comp-2362.component';

describe('MyComp2362Component', () => {
  let component: MyComp2362Component;
  let fixture: ComponentFixture<MyComp2362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
