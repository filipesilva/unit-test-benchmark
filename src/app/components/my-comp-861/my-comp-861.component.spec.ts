import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp861Component } from './my-comp-861.component';

describe('MyComp861Component', () => {
  let component: MyComp861Component;
  let fixture: ComponentFixture<MyComp861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
