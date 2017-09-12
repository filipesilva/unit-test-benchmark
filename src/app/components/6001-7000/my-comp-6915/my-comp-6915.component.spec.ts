import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6915Component } from './my-comp-6915.component';

describe('MyComp6915Component', () => {
  let component: MyComp6915Component;
  let fixture: ComponentFixture<MyComp6915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
