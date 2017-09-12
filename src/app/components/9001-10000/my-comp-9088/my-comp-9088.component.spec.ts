import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9088Component } from './my-comp-9088.component';

describe('MyComp9088Component', () => {
  let component: MyComp9088Component;
  let fixture: ComponentFixture<MyComp9088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
