import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2731Component } from './my-comp-2731.component';

describe('MyComp2731Component', () => {
  let component: MyComp2731Component;
  let fixture: ComponentFixture<MyComp2731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
