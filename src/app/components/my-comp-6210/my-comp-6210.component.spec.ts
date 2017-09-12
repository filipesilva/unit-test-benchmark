import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6210Component } from './my-comp-6210.component';

describe('MyComp6210Component', () => {
  let component: MyComp6210Component;
  let fixture: ComponentFixture<MyComp6210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
