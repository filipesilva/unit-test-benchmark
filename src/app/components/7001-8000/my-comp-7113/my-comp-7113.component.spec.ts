import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7113Component } from './my-comp-7113.component';

describe('MyComp7113Component', () => {
  let component: MyComp7113Component;
  let fixture: ComponentFixture<MyComp7113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
