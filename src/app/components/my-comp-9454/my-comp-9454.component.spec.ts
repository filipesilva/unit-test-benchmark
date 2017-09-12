import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9454Component } from './my-comp-9454.component';

describe('MyComp9454Component', () => {
  let component: MyComp9454Component;
  let fixture: ComponentFixture<MyComp9454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
