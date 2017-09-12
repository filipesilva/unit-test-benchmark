import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6509Component } from './my-comp-6509.component';

describe('MyComp6509Component', () => {
  let component: MyComp6509Component;
  let fixture: ComponentFixture<MyComp6509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
