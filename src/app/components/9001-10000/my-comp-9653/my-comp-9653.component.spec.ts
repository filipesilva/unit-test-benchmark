import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9653Component } from './my-comp-9653.component';

describe('MyComp9653Component', () => {
  let component: MyComp9653Component;
  let fixture: ComponentFixture<MyComp9653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
