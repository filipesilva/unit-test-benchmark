import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2510Component } from './my-comp-2510.component';

describe('MyComp2510Component', () => {
  let component: MyComp2510Component;
  let fixture: ComponentFixture<MyComp2510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
