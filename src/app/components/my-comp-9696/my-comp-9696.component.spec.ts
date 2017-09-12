import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9696Component } from './my-comp-9696.component';

describe('MyComp9696Component', () => {
  let component: MyComp9696Component;
  let fixture: ComponentFixture<MyComp9696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
