import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3834Component } from './my-comp-3834.component';

describe('MyComp3834Component', () => {
  let component: MyComp3834Component;
  let fixture: ComponentFixture<MyComp3834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
