import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6296Component } from './my-comp-6296.component';

describe('MyComp6296Component', () => {
  let component: MyComp6296Component;
  let fixture: ComponentFixture<MyComp6296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
