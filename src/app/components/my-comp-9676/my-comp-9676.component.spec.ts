import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9676Component } from './my-comp-9676.component';

describe('MyComp9676Component', () => {
  let component: MyComp9676Component;
  let fixture: ComponentFixture<MyComp9676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
