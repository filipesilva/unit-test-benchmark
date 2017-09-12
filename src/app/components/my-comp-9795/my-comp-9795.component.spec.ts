import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9795Component } from './my-comp-9795.component';

describe('MyComp9795Component', () => {
  let component: MyComp9795Component;
  let fixture: ComponentFixture<MyComp9795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
