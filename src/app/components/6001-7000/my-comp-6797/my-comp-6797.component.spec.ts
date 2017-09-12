import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6797Component } from './my-comp-6797.component';

describe('MyComp6797Component', () => {
  let component: MyComp6797Component;
  let fixture: ComponentFixture<MyComp6797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
