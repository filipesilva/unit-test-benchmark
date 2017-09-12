import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4028Component } from './my-comp-4028.component';

describe('MyComp4028Component', () => {
  let component: MyComp4028Component;
  let fixture: ComponentFixture<MyComp4028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
