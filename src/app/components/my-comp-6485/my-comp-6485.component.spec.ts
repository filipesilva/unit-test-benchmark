import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6485Component } from './my-comp-6485.component';

describe('MyComp6485Component', () => {
  let component: MyComp6485Component;
  let fixture: ComponentFixture<MyComp6485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
