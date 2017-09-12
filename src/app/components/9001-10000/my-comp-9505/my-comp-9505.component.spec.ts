import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9505Component } from './my-comp-9505.component';

describe('MyComp9505Component', () => {
  let component: MyComp9505Component;
  let fixture: ComponentFixture<MyComp9505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
