import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8745Component } from './my-comp-8745.component';

describe('MyComp8745Component', () => {
  let component: MyComp8745Component;
  let fixture: ComponentFixture<MyComp8745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
