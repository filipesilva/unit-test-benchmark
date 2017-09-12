import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6047Component } from './my-comp-6047.component';

describe('MyComp6047Component', () => {
  let component: MyComp6047Component;
  let fixture: ComponentFixture<MyComp6047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
