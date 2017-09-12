import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4510Component } from './my-comp-4510.component';

describe('MyComp4510Component', () => {
  let component: MyComp4510Component;
  let fixture: ComponentFixture<MyComp4510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
