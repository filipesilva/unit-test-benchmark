import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp293Component } from './my-comp-293.component';

describe('MyComp293Component', () => {
  let component: MyComp293Component;
  let fixture: ComponentFixture<MyComp293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
