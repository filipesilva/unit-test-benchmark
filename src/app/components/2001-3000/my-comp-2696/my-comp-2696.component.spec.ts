import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2696Component } from './my-comp-2696.component';

describe('MyComp2696Component', () => {
  let component: MyComp2696Component;
  let fixture: ComponentFixture<MyComp2696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
