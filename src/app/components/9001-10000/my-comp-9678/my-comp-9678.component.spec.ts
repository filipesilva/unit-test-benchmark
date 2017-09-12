import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9678Component } from './my-comp-9678.component';

describe('MyComp9678Component', () => {
  let component: MyComp9678Component;
  let fixture: ComponentFixture<MyComp9678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
