import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6953Component } from './my-comp-6953.component';

describe('MyComp6953Component', () => {
  let component: MyComp6953Component;
  let fixture: ComponentFixture<MyComp6953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
