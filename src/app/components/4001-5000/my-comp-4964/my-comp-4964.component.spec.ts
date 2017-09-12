import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4964Component } from './my-comp-4964.component';

describe('MyComp4964Component', () => {
  let component: MyComp4964Component;
  let fixture: ComponentFixture<MyComp4964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
