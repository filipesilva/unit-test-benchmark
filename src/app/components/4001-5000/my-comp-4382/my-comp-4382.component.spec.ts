import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4382Component } from './my-comp-4382.component';

describe('MyComp4382Component', () => {
  let component: MyComp4382Component;
  let fixture: ComponentFixture<MyComp4382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
