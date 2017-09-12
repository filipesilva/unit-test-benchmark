import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7264Component } from './my-comp-7264.component';

describe('MyComp7264Component', () => {
  let component: MyComp7264Component;
  let fixture: ComponentFixture<MyComp7264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
