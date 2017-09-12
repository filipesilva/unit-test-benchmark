import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2120Component } from './my-comp-2120.component';

describe('MyComp2120Component', () => {
  let component: MyComp2120Component;
  let fixture: ComponentFixture<MyComp2120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
