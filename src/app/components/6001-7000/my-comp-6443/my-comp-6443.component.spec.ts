import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6443Component } from './my-comp-6443.component';

describe('MyComp6443Component', () => {
  let component: MyComp6443Component;
  let fixture: ComponentFixture<MyComp6443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
