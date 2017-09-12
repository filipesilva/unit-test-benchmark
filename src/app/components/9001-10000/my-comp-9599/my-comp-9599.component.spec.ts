import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9599Component } from './my-comp-9599.component';

describe('MyComp9599Component', () => {
  let component: MyComp9599Component;
  let fixture: ComponentFixture<MyComp9599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
