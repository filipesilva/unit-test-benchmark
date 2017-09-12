import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9470Component } from './my-comp-9470.component';

describe('MyComp9470Component', () => {
  let component: MyComp9470Component;
  let fixture: ComponentFixture<MyComp9470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
