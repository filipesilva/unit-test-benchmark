import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5745Component } from './my-comp-5745.component';

describe('MyComp5745Component', () => {
  let component: MyComp5745Component;
  let fixture: ComponentFixture<MyComp5745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
