import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4230Component } from './my-comp-4230.component';

describe('MyComp4230Component', () => {
  let component: MyComp4230Component;
  let fixture: ComponentFixture<MyComp4230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
