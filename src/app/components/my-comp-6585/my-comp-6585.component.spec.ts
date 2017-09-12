import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6585Component } from './my-comp-6585.component';

describe('MyComp6585Component', () => {
  let component: MyComp6585Component;
  let fixture: ComponentFixture<MyComp6585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
