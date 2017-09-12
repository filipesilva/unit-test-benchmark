import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9383Component } from './my-comp-9383.component';

describe('MyComp9383Component', () => {
  let component: MyComp9383Component;
  let fixture: ComponentFixture<MyComp9383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
