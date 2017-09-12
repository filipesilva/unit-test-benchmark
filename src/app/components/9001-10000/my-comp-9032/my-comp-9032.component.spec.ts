import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9032Component } from './my-comp-9032.component';

describe('MyComp9032Component', () => {
  let component: MyComp9032Component;
  let fixture: ComponentFixture<MyComp9032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
