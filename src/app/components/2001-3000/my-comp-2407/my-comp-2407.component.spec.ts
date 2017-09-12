import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2407Component } from './my-comp-2407.component';

describe('MyComp2407Component', () => {
  let component: MyComp2407Component;
  let fixture: ComponentFixture<MyComp2407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
