import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2038Component } from './my-comp-2038.component';

describe('MyComp2038Component', () => {
  let component: MyComp2038Component;
  let fixture: ComponentFixture<MyComp2038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
