import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9941Component } from './my-comp-9941.component';

describe('MyComp9941Component', () => {
  let component: MyComp9941Component;
  let fixture: ComponentFixture<MyComp9941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
