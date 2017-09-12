import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2059Component } from './my-comp-2059.component';

describe('MyComp2059Component', () => {
  let component: MyComp2059Component;
  let fixture: ComponentFixture<MyComp2059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
