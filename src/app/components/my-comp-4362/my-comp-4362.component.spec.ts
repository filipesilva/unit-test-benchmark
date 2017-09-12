import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4362Component } from './my-comp-4362.component';

describe('MyComp4362Component', () => {
  let component: MyComp4362Component;
  let fixture: ComponentFixture<MyComp4362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
