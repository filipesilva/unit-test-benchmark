import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2900Component } from './my-comp-2900.component';

describe('MyComp2900Component', () => {
  let component: MyComp2900Component;
  let fixture: ComponentFixture<MyComp2900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
