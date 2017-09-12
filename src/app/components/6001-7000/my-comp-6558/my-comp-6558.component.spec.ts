import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6558Component } from './my-comp-6558.component';

describe('MyComp6558Component', () => {
  let component: MyComp6558Component;
  let fixture: ComponentFixture<MyComp6558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
