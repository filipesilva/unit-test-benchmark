import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6174Component } from './my-comp-6174.component';

describe('MyComp6174Component', () => {
  let component: MyComp6174Component;
  let fixture: ComponentFixture<MyComp6174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
