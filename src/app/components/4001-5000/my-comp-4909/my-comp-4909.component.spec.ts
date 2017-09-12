import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4909Component } from './my-comp-4909.component';

describe('MyComp4909Component', () => {
  let component: MyComp4909Component;
  let fixture: ComponentFixture<MyComp4909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
