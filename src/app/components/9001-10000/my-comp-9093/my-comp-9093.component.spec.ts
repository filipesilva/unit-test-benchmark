import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9093Component } from './my-comp-9093.component';

describe('MyComp9093Component', () => {
  let component: MyComp9093Component;
  let fixture: ComponentFixture<MyComp9093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
