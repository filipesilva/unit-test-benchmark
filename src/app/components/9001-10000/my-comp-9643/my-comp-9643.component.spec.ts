import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9643Component } from './my-comp-9643.component';

describe('MyComp9643Component', () => {
  let component: MyComp9643Component;
  let fixture: ComponentFixture<MyComp9643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
