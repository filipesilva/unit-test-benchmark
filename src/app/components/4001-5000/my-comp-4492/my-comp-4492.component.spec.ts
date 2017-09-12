import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4492Component } from './my-comp-4492.component';

describe('MyComp4492Component', () => {
  let component: MyComp4492Component;
  let fixture: ComponentFixture<MyComp4492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
