import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6834Component } from './my-comp-6834.component';

describe('MyComp6834Component', () => {
  let component: MyComp6834Component;
  let fixture: ComponentFixture<MyComp6834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
