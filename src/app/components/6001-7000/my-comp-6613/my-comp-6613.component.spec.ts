import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6613Component } from './my-comp-6613.component';

describe('MyComp6613Component', () => {
  let component: MyComp6613Component;
  let fixture: ComponentFixture<MyComp6613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
