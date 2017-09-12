import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp594Component } from './my-comp-594.component';

describe('MyComp594Component', () => {
  let component: MyComp594Component;
  let fixture: ComponentFixture<MyComp594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
