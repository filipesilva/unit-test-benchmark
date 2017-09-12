import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6587Component } from './my-comp-6587.component';

describe('MyComp6587Component', () => {
  let component: MyComp6587Component;
  let fixture: ComponentFixture<MyComp6587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
