import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2598Component } from './my-comp-2598.component';

describe('MyComp2598Component', () => {
  let component: MyComp2598Component;
  let fixture: ComponentFixture<MyComp2598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
