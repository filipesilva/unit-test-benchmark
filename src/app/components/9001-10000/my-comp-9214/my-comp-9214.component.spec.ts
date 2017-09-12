import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9214Component } from './my-comp-9214.component';

describe('MyComp9214Component', () => {
  let component: MyComp9214Component;
  let fixture: ComponentFixture<MyComp9214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
