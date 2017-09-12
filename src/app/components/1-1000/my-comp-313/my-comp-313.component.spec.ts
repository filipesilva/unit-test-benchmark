import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp313Component } from './my-comp-313.component';

describe('MyComp313Component', () => {
  let component: MyComp313Component;
  let fixture: ComponentFixture<MyComp313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
