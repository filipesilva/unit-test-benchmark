import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6420Component } from './my-comp-6420.component';

describe('MyComp6420Component', () => {
  let component: MyComp6420Component;
  let fixture: ComponentFixture<MyComp6420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
