import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9258Component } from './my-comp-9258.component';

describe('MyComp9258Component', () => {
  let component: MyComp9258Component;
  let fixture: ComponentFixture<MyComp9258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
