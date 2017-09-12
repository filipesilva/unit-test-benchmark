import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5382Component } from './my-comp-5382.component';

describe('MyComp5382Component', () => {
  let component: MyComp5382Component;
  let fixture: ComponentFixture<MyComp5382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
