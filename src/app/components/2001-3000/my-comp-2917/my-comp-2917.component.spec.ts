import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2917Component } from './my-comp-2917.component';

describe('MyComp2917Component', () => {
  let component: MyComp2917Component;
  let fixture: ComponentFixture<MyComp2917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
