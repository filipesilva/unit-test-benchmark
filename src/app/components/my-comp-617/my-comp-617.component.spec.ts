import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp617Component } from './my-comp-617.component';

describe('MyComp617Component', () => {
  let component: MyComp617Component;
  let fixture: ComponentFixture<MyComp617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
