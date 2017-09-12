import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9322Component } from './my-comp-9322.component';

describe('MyComp9322Component', () => {
  let component: MyComp9322Component;
  let fixture: ComponentFixture<MyComp9322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
