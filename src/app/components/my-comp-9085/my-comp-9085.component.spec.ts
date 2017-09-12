import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9085Component } from './my-comp-9085.component';

describe('MyComp9085Component', () => {
  let component: MyComp9085Component;
  let fixture: ComponentFixture<MyComp9085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
