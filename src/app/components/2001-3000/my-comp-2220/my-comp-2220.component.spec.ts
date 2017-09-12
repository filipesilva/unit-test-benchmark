import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2220Component } from './my-comp-2220.component';

describe('MyComp2220Component', () => {
  let component: MyComp2220Component;
  let fixture: ComponentFixture<MyComp2220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
