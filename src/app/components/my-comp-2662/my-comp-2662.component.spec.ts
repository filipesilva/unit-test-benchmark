import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2662Component } from './my-comp-2662.component';

describe('MyComp2662Component', () => {
  let component: MyComp2662Component;
  let fixture: ComponentFixture<MyComp2662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
