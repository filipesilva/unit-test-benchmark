import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6186Component } from './my-comp-6186.component';

describe('MyComp6186Component', () => {
  let component: MyComp6186Component;
  let fixture: ComponentFixture<MyComp6186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
