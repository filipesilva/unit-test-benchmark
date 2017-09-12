import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7430Component } from './my-comp-7430.component';

describe('MyComp7430Component', () => {
  let component: MyComp7430Component;
  let fixture: ComponentFixture<MyComp7430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
