import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6920Component } from './my-comp-6920.component';

describe('MyComp6920Component', () => {
  let component: MyComp6920Component;
  let fixture: ComponentFixture<MyComp6920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
