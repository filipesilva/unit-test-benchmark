import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp745Component } from './my-comp-745.component';

describe('MyComp745Component', () => {
  let component: MyComp745Component;
  let fixture: ComponentFixture<MyComp745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
