import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2797Component } from './my-comp-2797.component';

describe('MyComp2797Component', () => {
  let component: MyComp2797Component;
  let fixture: ComponentFixture<MyComp2797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
