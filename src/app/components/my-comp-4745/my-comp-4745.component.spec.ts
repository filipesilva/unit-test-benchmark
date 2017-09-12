import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4745Component } from './my-comp-4745.component';

describe('MyComp4745Component', () => {
  let component: MyComp4745Component;
  let fixture: ComponentFixture<MyComp4745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
