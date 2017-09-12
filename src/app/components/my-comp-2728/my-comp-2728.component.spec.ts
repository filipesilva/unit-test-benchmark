import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2728Component } from './my-comp-2728.component';

describe('MyComp2728Component', () => {
  let component: MyComp2728Component;
  let fixture: ComponentFixture<MyComp2728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
