import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4920Component } from './my-comp-4920.component';

describe('MyComp4920Component', () => {
  let component: MyComp4920Component;
  let fixture: ComponentFixture<MyComp4920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
