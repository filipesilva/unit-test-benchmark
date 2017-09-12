import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp383Component } from './my-comp-383.component';

describe('MyComp383Component', () => {
  let component: MyComp383Component;
  let fixture: ComponentFixture<MyComp383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
