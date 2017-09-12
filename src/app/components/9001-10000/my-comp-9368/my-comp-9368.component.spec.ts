import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9368Component } from './my-comp-9368.component';

describe('MyComp9368Component', () => {
  let component: MyComp9368Component;
  let fixture: ComponentFixture<MyComp9368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
