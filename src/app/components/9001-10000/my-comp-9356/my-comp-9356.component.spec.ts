import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9356Component } from './my-comp-9356.component';

describe('MyComp9356Component', () => {
  let component: MyComp9356Component;
  let fixture: ComponentFixture<MyComp9356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
