import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9354Component } from './my-comp-9354.component';

describe('MyComp9354Component', () => {
  let component: MyComp9354Component;
  let fixture: ComponentFixture<MyComp9354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
