import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4637Component } from './my-comp-4637.component';

describe('MyComp4637Component', () => {
  let component: MyComp4637Component;
  let fixture: ComponentFixture<MyComp4637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
