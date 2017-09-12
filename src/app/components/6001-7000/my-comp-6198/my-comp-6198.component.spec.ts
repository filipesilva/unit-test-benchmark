import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6198Component } from './my-comp-6198.component';

describe('MyComp6198Component', () => {
  let component: MyComp6198Component;
  let fixture: ComponentFixture<MyComp6198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
