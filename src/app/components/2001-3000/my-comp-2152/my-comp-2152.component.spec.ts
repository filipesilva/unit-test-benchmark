import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2152Component } from './my-comp-2152.component';

describe('MyComp2152Component', () => {
  let component: MyComp2152Component;
  let fixture: ComponentFixture<MyComp2152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
