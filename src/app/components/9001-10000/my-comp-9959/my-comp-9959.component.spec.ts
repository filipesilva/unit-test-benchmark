import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9959Component } from './my-comp-9959.component';

describe('MyComp9959Component', () => {
  let component: MyComp9959Component;
  let fixture: ComponentFixture<MyComp9959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
