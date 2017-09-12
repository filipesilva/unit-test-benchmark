import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9667Component } from './my-comp-9667.component';

describe('MyComp9667Component', () => {
  let component: MyComp9667Component;
  let fixture: ComponentFixture<MyComp9667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
