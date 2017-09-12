import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9520Component } from './my-comp-9520.component';

describe('MyComp9520Component', () => {
  let component: MyComp9520Component;
  let fixture: ComponentFixture<MyComp9520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
