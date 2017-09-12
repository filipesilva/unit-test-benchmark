import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6214Component } from './my-comp-6214.component';

describe('MyComp6214Component', () => {
  let component: MyComp6214Component;
  let fixture: ComponentFixture<MyComp6214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
