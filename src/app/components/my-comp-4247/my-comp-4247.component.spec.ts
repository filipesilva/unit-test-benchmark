import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4247Component } from './my-comp-4247.component';

describe('MyComp4247Component', () => {
  let component: MyComp4247Component;
  let fixture: ComponentFixture<MyComp4247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
