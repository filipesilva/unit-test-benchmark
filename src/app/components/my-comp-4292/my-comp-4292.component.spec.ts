import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4292Component } from './my-comp-4292.component';

describe('MyComp4292Component', () => {
  let component: MyComp4292Component;
  let fixture: ComponentFixture<MyComp4292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
