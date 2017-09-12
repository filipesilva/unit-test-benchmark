import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9013Component } from './my-comp-9013.component';

describe('MyComp9013Component', () => {
  let component: MyComp9013Component;
  let fixture: ComponentFixture<MyComp9013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
