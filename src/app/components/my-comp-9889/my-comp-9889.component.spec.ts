import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9889Component } from './my-comp-9889.component';

describe('MyComp9889Component', () => {
  let component: MyComp9889Component;
  let fixture: ComponentFixture<MyComp9889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
