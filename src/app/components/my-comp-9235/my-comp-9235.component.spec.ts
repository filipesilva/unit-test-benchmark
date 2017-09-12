import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9235Component } from './my-comp-9235.component';

describe('MyComp9235Component', () => {
  let component: MyComp9235Component;
  let fixture: ComponentFixture<MyComp9235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
