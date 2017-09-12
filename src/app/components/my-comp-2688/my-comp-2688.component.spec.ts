import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2688Component } from './my-comp-2688.component';

describe('MyComp2688Component', () => {
  let component: MyComp2688Component;
  let fixture: ComponentFixture<MyComp2688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
