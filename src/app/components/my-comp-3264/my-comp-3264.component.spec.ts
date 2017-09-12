import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3264Component } from './my-comp-3264.component';

describe('MyComp3264Component', () => {
  let component: MyComp3264Component;
  let fixture: ComponentFixture<MyComp3264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
