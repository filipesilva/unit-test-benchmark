import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6609Component } from './my-comp-6609.component';

describe('MyComp6609Component', () => {
  let component: MyComp6609Component;
  let fixture: ComponentFixture<MyComp6609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
