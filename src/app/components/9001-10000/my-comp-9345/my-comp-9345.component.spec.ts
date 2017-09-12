import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9345Component } from './my-comp-9345.component';

describe('MyComp9345Component', () => {
  let component: MyComp9345Component;
  let fixture: ComponentFixture<MyComp9345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
