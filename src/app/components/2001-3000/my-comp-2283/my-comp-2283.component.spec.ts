import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2283Component } from './my-comp-2283.component';

describe('MyComp2283Component', () => {
  let component: MyComp2283Component;
  let fixture: ComponentFixture<MyComp2283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
