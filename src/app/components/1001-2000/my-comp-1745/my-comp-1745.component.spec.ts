import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1745Component } from './my-comp-1745.component';

describe('MyComp1745Component', () => {
  let component: MyComp1745Component;
  let fixture: ComponentFixture<MyComp1745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
