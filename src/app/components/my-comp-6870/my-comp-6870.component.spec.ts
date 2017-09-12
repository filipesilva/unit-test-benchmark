import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6870Component } from './my-comp-6870.component';

describe('MyComp6870Component', () => {
  let component: MyComp6870Component;
  let fixture: ComponentFixture<MyComp6870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
