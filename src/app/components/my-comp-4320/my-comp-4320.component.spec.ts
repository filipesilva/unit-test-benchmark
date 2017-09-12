import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4320Component } from './my-comp-4320.component';

describe('MyComp4320Component', () => {
  let component: MyComp4320Component;
  let fixture: ComponentFixture<MyComp4320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
