import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp318Component } from './my-comp-318.component';

describe('MyComp318Component', () => {
  let component: MyComp318Component;
  let fixture: ComponentFixture<MyComp318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
