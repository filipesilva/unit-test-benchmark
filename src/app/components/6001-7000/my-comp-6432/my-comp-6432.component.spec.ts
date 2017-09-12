import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6432Component } from './my-comp-6432.component';

describe('MyComp6432Component', () => {
  let component: MyComp6432Component;
  let fixture: ComponentFixture<MyComp6432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
