import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4832Component } from './my-comp-4832.component';

describe('MyComp4832Component', () => {
  let component: MyComp4832Component;
  let fixture: ComponentFixture<MyComp4832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
