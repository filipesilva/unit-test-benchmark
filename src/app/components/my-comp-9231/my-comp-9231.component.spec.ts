import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9231Component } from './my-comp-9231.component';

describe('MyComp9231Component', () => {
  let component: MyComp9231Component;
  let fixture: ComponentFixture<MyComp9231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
