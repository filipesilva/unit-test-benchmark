import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4065Component } from './my-comp-4065.component';

describe('MyComp4065Component', () => {
  let component: MyComp4065Component;
  let fixture: ComponentFixture<MyComp4065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
