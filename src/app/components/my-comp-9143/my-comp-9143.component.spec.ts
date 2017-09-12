import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9143Component } from './my-comp-9143.component';

describe('MyComp9143Component', () => {
  let component: MyComp9143Component;
  let fixture: ComponentFixture<MyComp9143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
