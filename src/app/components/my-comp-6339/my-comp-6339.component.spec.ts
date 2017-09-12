import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6339Component } from './my-comp-6339.component';

describe('MyComp6339Component', () => {
  let component: MyComp6339Component;
  let fixture: ComponentFixture<MyComp6339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
