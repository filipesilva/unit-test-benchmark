import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp39Component } from './my-comp-39.component';

describe('MyComp39Component', () => {
  let component: MyComp39Component;
  let fixture: ComponentFixture<MyComp39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
