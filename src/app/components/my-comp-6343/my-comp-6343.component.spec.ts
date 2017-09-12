import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6343Component } from './my-comp-6343.component';

describe('MyComp6343Component', () => {
  let component: MyComp6343Component;
  let fixture: ComponentFixture<MyComp6343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
