import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6313Component } from './my-comp-6313.component';

describe('MyComp6313Component', () => {
  let component: MyComp6313Component;
  let fixture: ComponentFixture<MyComp6313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
