import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9323Component } from './my-comp-9323.component';

describe('MyComp9323Component', () => {
  let component: MyComp9323Component;
  let fixture: ComponentFixture<MyComp9323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
