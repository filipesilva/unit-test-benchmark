import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2799Component } from './my-comp-2799.component';

describe('MyComp2799Component', () => {
  let component: MyComp2799Component;
  let fixture: ComponentFixture<MyComp2799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
