import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp676Component } from './my-comp-676.component';

describe('MyComp676Component', () => {
  let component: MyComp676Component;
  let fixture: ComponentFixture<MyComp676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
