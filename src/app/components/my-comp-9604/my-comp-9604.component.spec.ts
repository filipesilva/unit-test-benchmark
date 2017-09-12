import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9604Component } from './my-comp-9604.component';

describe('MyComp9604Component', () => {
  let component: MyComp9604Component;
  let fixture: ComponentFixture<MyComp9604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
