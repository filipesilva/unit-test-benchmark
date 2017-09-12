import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5801Component } from './my-comp-5801.component';

describe('MyComp5801Component', () => {
  let component: MyComp5801Component;
  let fixture: ComponentFixture<MyComp5801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
