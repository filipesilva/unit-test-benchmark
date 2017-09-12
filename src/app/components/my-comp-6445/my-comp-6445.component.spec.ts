import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6445Component } from './my-comp-6445.component';

describe('MyComp6445Component', () => {
  let component: MyComp6445Component;
  let fixture: ComponentFixture<MyComp6445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
