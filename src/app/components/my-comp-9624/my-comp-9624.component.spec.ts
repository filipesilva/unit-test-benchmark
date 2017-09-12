import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9624Component } from './my-comp-9624.component';

describe('MyComp9624Component', () => {
  let component: MyComp9624Component;
  let fixture: ComponentFixture<MyComp9624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
