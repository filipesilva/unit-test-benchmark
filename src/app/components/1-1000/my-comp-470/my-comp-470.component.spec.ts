import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp470Component } from './my-comp-470.component';

describe('MyComp470Component', () => {
  let component: MyComp470Component;
  let fixture: ComponentFixture<MyComp470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
