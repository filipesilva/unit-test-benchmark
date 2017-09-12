import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp350Component } from './my-comp-350.component';

describe('MyComp350Component', () => {
  let component: MyComp350Component;
  let fixture: ComponentFixture<MyComp350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
