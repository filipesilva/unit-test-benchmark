import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6687Component } from './my-comp-6687.component';

describe('MyComp6687Component', () => {
  let component: MyComp6687Component;
  let fixture: ComponentFixture<MyComp6687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
