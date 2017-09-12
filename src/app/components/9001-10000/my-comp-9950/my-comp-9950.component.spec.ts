import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9950Component } from './my-comp-9950.component';

describe('MyComp9950Component', () => {
  let component: MyComp9950Component;
  let fixture: ComponentFixture<MyComp9950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
