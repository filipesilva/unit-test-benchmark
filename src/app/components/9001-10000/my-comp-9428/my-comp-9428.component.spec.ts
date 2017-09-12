import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9428Component } from './my-comp-9428.component';

describe('MyComp9428Component', () => {
  let component: MyComp9428Component;
  let fixture: ComponentFixture<MyComp9428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
