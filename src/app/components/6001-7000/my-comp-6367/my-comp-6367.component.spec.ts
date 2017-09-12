import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6367Component } from './my-comp-6367.component';

describe('MyComp6367Component', () => {
  let component: MyComp6367Component;
  let fixture: ComponentFixture<MyComp6367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
