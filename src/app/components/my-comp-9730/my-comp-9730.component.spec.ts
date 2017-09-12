import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9730Component } from './my-comp-9730.component';

describe('MyComp9730Component', () => {
  let component: MyComp9730Component;
  let fixture: ComponentFixture<MyComp9730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
