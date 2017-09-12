import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2302Component } from './my-comp-2302.component';

describe('MyComp2302Component', () => {
  let component: MyComp2302Component;
  let fixture: ComponentFixture<MyComp2302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
