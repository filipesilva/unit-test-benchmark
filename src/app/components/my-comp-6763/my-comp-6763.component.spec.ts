import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6763Component } from './my-comp-6763.component';

describe('MyComp6763Component', () => {
  let component: MyComp6763Component;
  let fixture: ComponentFixture<MyComp6763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
