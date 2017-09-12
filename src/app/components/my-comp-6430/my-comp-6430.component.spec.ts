import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6430Component } from './my-comp-6430.component';

describe('MyComp6430Component', () => {
  let component: MyComp6430Component;
  let fixture: ComponentFixture<MyComp6430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
