import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6065Component } from './my-comp-6065.component';

describe('MyComp6065Component', () => {
  let component: MyComp6065Component;
  let fixture: ComponentFixture<MyComp6065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
