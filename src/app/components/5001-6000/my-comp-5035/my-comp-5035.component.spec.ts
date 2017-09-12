import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5035Component } from './my-comp-5035.component';

describe('MyComp5035Component', () => {
  let component: MyComp5035Component;
  let fixture: ComponentFixture<MyComp5035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
