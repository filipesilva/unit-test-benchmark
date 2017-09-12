import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6927Component } from './my-comp-6927.component';

describe('MyComp6927Component', () => {
  let component: MyComp6927Component;
  let fixture: ComponentFixture<MyComp6927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
