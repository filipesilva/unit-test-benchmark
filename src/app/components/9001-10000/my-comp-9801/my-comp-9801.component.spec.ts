import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9801Component } from './my-comp-9801.component';

describe('MyComp9801Component', () => {
  let component: MyComp9801Component;
  let fixture: ComponentFixture<MyComp9801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
