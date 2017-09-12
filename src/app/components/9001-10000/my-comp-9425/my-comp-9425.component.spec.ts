import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9425Component } from './my-comp-9425.component';

describe('MyComp9425Component', () => {
  let component: MyComp9425Component;
  let fixture: ComponentFixture<MyComp9425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
