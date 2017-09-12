import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9610Component } from './my-comp-9610.component';

describe('MyComp9610Component', () => {
  let component: MyComp9610Component;
  let fixture: ComponentFixture<MyComp9610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
