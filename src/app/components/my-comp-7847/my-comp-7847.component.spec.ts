import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7847Component } from './my-comp-7847.component';

describe('MyComp7847Component', () => {
  let component: MyComp7847Component;
  let fixture: ComponentFixture<MyComp7847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
