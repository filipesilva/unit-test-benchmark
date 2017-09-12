import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2430Component } from './my-comp-2430.component';

describe('MyComp2430Component', () => {
  let component: MyComp2430Component;
  let fixture: ComponentFixture<MyComp2430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
