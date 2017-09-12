import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6425Component } from './my-comp-6425.component';

describe('MyComp6425Component', () => {
  let component: MyComp6425Component;
  let fixture: ComponentFixture<MyComp6425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
