import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7745Component } from './my-comp-7745.component';

describe('MyComp7745Component', () => {
  let component: MyComp7745Component;
  let fixture: ComponentFixture<MyComp7745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
