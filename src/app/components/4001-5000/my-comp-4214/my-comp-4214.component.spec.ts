import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4214Component } from './my-comp-4214.component';

describe('MyComp4214Component', () => {
  let component: MyComp4214Component;
  let fixture: ComponentFixture<MyComp4214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
