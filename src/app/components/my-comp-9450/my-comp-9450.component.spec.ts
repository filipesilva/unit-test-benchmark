import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9450Component } from './my-comp-9450.component';

describe('MyComp9450Component', () => {
  let component: MyComp9450Component;
  let fixture: ComponentFixture<MyComp9450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
