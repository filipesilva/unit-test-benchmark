import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9014Component } from './my-comp-9014.component';

describe('MyComp9014Component', () => {
  let component: MyComp9014Component;
  let fixture: ComponentFixture<MyComp9014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
