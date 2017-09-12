import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6549Component } from './my-comp-6549.component';

describe('MyComp6549Component', () => {
  let component: MyComp6549Component;
  let fixture: ComponentFixture<MyComp6549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
