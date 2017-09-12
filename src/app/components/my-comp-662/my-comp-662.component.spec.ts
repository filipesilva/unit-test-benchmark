import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp662Component } from './my-comp-662.component';

describe('MyComp662Component', () => {
  let component: MyComp662Component;
  let fixture: ComponentFixture<MyComp662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
