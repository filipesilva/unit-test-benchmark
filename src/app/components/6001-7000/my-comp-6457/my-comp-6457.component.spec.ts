import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6457Component } from './my-comp-6457.component';

describe('MyComp6457Component', () => {
  let component: MyComp6457Component;
  let fixture: ComponentFixture<MyComp6457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
