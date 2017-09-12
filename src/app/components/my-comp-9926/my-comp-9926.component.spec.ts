import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9926Component } from './my-comp-9926.component';

describe('MyComp9926Component', () => {
  let component: MyComp9926Component;
  let fixture: ComponentFixture<MyComp9926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
