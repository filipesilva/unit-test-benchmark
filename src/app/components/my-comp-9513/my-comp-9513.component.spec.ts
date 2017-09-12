import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9513Component } from './my-comp-9513.component';

describe('MyComp9513Component', () => {
  let component: MyComp9513Component;
  let fixture: ComponentFixture<MyComp9513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
