import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2130Component } from './my-comp-2130.component';

describe('MyComp2130Component', () => {
  let component: MyComp2130Component;
  let fixture: ComponentFixture<MyComp2130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
