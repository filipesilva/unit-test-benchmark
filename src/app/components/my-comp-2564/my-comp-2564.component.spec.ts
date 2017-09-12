import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2564Component } from './my-comp-2564.component';

describe('MyComp2564Component', () => {
  let component: MyComp2564Component;
  let fixture: ComponentFixture<MyComp2564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
