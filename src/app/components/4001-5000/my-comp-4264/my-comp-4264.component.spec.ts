import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4264Component } from './my-comp-4264.component';

describe('MyComp4264Component', () => {
  let component: MyComp4264Component;
  let fixture: ComponentFixture<MyComp4264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
