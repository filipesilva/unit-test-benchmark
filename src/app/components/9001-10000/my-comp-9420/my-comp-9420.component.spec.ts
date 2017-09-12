import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9420Component } from './my-comp-9420.component';

describe('MyComp9420Component', () => {
  let component: MyComp9420Component;
  let fixture: ComponentFixture<MyComp9420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
