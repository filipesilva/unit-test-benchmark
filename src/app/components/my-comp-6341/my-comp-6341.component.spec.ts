import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6341Component } from './my-comp-6341.component';

describe('MyComp6341Component', () => {
  let component: MyComp6341Component;
  let fixture: ComponentFixture<MyComp6341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
