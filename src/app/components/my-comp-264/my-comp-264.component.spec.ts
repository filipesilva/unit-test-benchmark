import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp264Component } from './my-comp-264.component';

describe('MyComp264Component', () => {
  let component: MyComp264Component;
  let fixture: ComponentFixture<MyComp264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
