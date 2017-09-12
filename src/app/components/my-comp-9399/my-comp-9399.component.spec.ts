import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9399Component } from './my-comp-9399.component';

describe('MyComp9399Component', () => {
  let component: MyComp9399Component;
  let fixture: ComponentFixture<MyComp9399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
