import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2619Component } from './my-comp-2619.component';

describe('MyComp2619Component', () => {
  let component: MyComp2619Component;
  let fixture: ComponentFixture<MyComp2619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
