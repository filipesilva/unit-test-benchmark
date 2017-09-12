import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6220Component } from './my-comp-6220.component';

describe('MyComp6220Component', () => {
  let component: MyComp6220Component;
  let fixture: ComponentFixture<MyComp6220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
