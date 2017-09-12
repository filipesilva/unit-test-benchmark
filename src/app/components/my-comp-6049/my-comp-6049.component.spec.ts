import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6049Component } from './my-comp-6049.component';

describe('MyComp6049Component', () => {
  let component: MyComp6049Component;
  let fixture: ComponentFixture<MyComp6049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
