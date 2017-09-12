import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9182Component } from './my-comp-9182.component';

describe('MyComp9182Component', () => {
  let component: MyComp9182Component;
  let fixture: ComponentFixture<MyComp9182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
