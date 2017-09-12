import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6854Component } from './my-comp-6854.component';

describe('MyComp6854Component', () => {
  let component: MyComp6854Component;
  let fixture: ComponentFixture<MyComp6854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
