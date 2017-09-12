import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6117Component } from './my-comp-6117.component';

describe('MyComp6117Component', () => {
  let component: MyComp6117Component;
  let fixture: ComponentFixture<MyComp6117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
