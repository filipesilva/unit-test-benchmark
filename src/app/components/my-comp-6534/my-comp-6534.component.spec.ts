import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6534Component } from './my-comp-6534.component';

describe('MyComp6534Component', () => {
  let component: MyComp6534Component;
  let fixture: ComponentFixture<MyComp6534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
