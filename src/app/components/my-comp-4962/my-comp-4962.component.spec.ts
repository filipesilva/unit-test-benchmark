import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4962Component } from './my-comp-4962.component';

describe('MyComp4962Component', () => {
  let component: MyComp4962Component;
  let fixture: ComponentFixture<MyComp4962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
