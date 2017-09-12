import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2883Component } from './my-comp-2883.component';

describe('MyComp2883Component', () => {
  let component: MyComp2883Component;
  let fixture: ComponentFixture<MyComp2883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
