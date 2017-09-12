import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6742Component } from './my-comp-6742.component';

describe('MyComp6742Component', () => {
  let component: MyComp6742Component;
  let fixture: ComponentFixture<MyComp6742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
