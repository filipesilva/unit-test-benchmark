import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6645Component } from './my-comp-6645.component';

describe('MyComp6645Component', () => {
  let component: MyComp6645Component;
  let fixture: ComponentFixture<MyComp6645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
