import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9487Component } from './my-comp-9487.component';

describe('MyComp9487Component', () => {
  let component: MyComp9487Component;
  let fixture: ComponentFixture<MyComp9487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
