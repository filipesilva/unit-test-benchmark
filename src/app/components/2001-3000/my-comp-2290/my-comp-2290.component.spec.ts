import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2290Component } from './my-comp-2290.component';

describe('MyComp2290Component', () => {
  let component: MyComp2290Component;
  let fixture: ComponentFixture<MyComp2290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
