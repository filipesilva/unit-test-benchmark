import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp771Component } from './my-comp-771.component';

describe('MyComp771Component', () => {
  let component: MyComp771Component;
  let fixture: ComponentFixture<MyComp771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
