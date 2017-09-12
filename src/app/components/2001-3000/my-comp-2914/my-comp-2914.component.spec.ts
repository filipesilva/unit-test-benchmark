import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2914Component } from './my-comp-2914.component';

describe('MyComp2914Component', () => {
  let component: MyComp2914Component;
  let fixture: ComponentFixture<MyComp2914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
