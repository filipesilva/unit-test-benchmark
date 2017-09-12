import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9905Component } from './my-comp-9905.component';

describe('MyComp9905Component', () => {
  let component: MyComp9905Component;
  let fixture: ComponentFixture<MyComp9905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
