import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9486Component } from './my-comp-9486.component';

describe('MyComp9486Component', () => {
  let component: MyComp9486Component;
  let fixture: ComponentFixture<MyComp9486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
