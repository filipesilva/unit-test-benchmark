import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2739Component } from './my-comp-2739.component';

describe('MyComp2739Component', () => {
  let component: MyComp2739Component;
  let fixture: ComponentFixture<MyComp2739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
