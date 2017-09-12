import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6302Component } from './my-comp-6302.component';

describe('MyComp6302Component', () => {
  let component: MyComp6302Component;
  let fixture: ComponentFixture<MyComp6302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
