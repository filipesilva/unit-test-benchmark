import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9232Component } from './my-comp-9232.component';

describe('MyComp9232Component', () => {
  let component: MyComp9232Component;
  let fixture: ComponentFixture<MyComp9232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
