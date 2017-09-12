import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9202Component } from './my-comp-9202.component';

describe('MyComp9202Component', () => {
  let component: MyComp9202Component;
  let fixture: ComponentFixture<MyComp9202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
