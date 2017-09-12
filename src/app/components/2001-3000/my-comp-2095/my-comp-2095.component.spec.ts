import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2095Component } from './my-comp-2095.component';

describe('MyComp2095Component', () => {
  let component: MyComp2095Component;
  let fixture: ComponentFixture<MyComp2095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
