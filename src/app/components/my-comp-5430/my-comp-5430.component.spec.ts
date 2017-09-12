import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5430Component } from './my-comp-5430.component';

describe('MyComp5430Component', () => {
  let component: MyComp5430Component;
  let fixture: ComponentFixture<MyComp5430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
