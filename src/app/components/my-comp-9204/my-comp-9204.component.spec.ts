import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9204Component } from './my-comp-9204.component';

describe('MyComp9204Component', () => {
  let component: MyComp9204Component;
  let fixture: ComponentFixture<MyComp9204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
