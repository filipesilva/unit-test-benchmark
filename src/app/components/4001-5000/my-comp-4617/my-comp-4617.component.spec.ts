import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4617Component } from './my-comp-4617.component';

describe('MyComp4617Component', () => {
  let component: MyComp4617Component;
  let fixture: ComponentFixture<MyComp4617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
