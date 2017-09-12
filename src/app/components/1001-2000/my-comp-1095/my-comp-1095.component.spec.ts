import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1095Component } from './my-comp-1095.component';

describe('MyComp1095Component', () => {
  let component: MyComp1095Component;
  let fixture: ComponentFixture<MyComp1095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
