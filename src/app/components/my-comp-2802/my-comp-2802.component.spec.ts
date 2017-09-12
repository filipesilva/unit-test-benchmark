import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2802Component } from './my-comp-2802.component';

describe('MyComp2802Component', () => {
  let component: MyComp2802Component;
  let fixture: ComponentFixture<MyComp2802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
