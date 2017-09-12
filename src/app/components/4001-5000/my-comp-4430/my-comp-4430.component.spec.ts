import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4430Component } from './my-comp-4430.component';

describe('MyComp4430Component', () => {
  let component: MyComp4430Component;
  let fixture: ComponentFixture<MyComp4430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
