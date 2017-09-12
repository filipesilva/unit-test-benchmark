import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9745Component } from './my-comp-9745.component';

describe('MyComp9745Component', () => {
  let component: MyComp9745Component;
  let fixture: ComponentFixture<MyComp9745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
