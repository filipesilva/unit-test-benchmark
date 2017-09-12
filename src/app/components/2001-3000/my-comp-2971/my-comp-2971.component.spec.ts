import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2971Component } from './my-comp-2971.component';

describe('MyComp2971Component', () => {
  let component: MyComp2971Component;
  let fixture: ComponentFixture<MyComp2971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
