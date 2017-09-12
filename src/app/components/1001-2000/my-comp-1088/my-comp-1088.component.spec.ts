import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1088Component } from './my-comp-1088.component';

describe('MyComp1088Component', () => {
  let component: MyComp1088Component;
  let fixture: ComponentFixture<MyComp1088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
