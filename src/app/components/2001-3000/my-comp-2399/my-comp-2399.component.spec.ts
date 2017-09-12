import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2399Component } from './my-comp-2399.component';

describe('MyComp2399Component', () => {
  let component: MyComp2399Component;
  let fixture: ComponentFixture<MyComp2399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
