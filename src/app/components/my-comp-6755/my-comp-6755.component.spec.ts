import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6755Component } from './my-comp-6755.component';

describe('MyComp6755Component', () => {
  let component: MyComp6755Component;
  let fixture: ComponentFixture<MyComp6755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
