import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4123Component } from './my-comp-4123.component';

describe('MyComp4123Component', () => {
  let component: MyComp4123Component;
  let fixture: ComponentFixture<MyComp4123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
