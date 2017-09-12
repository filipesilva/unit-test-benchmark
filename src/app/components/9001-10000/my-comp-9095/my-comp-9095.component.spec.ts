import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9095Component } from './my-comp-9095.component';

describe('MyComp9095Component', () => {
  let component: MyComp9095Component;
  let fixture: ComponentFixture<MyComp9095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
