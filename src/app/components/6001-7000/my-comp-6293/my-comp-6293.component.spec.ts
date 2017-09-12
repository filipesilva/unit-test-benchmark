import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6293Component } from './my-comp-6293.component';

describe('MyComp6293Component', () => {
  let component: MyComp6293Component;
  let fixture: ComponentFixture<MyComp6293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
