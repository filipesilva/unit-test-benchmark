import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6227Component } from './my-comp-6227.component';

describe('MyComp6227Component', () => {
  let component: MyComp6227Component;
  let fixture: ComponentFixture<MyComp6227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
