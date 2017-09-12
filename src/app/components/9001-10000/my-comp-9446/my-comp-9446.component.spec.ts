import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9446Component } from './my-comp-9446.component';

describe('MyComp9446Component', () => {
  let component: MyComp9446Component;
  let fixture: ComponentFixture<MyComp9446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
