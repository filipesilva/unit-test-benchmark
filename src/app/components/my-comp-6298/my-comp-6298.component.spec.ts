import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6298Component } from './my-comp-6298.component';

describe('MyComp6298Component', () => {
  let component: MyComp6298Component;
  let fixture: ComponentFixture<MyComp6298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
