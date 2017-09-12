import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2052Component } from './my-comp-2052.component';

describe('MyComp2052Component', () => {
  let component: MyComp2052Component;
  let fixture: ComponentFixture<MyComp2052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
