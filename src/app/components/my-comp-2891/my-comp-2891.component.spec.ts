import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2891Component } from './my-comp-2891.component';

describe('MyComp2891Component', () => {
  let component: MyComp2891Component;
  let fixture: ComponentFixture<MyComp2891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
