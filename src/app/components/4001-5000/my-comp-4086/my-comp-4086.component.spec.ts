import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4086Component } from './my-comp-4086.component';

describe('MyComp4086Component', () => {
  let component: MyComp4086Component;
  let fixture: ComponentFixture<MyComp4086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
