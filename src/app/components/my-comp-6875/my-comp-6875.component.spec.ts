import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6875Component } from './my-comp-6875.component';

describe('MyComp6875Component', () => {
  let component: MyComp6875Component;
  let fixture: ComponentFixture<MyComp6875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
