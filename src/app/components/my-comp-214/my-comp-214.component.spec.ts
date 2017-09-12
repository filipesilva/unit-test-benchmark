import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp214Component } from './my-comp-214.component';

describe('MyComp214Component', () => {
  let component: MyComp214Component;
  let fixture: ComponentFixture<MyComp214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
