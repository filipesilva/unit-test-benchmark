import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6126Component } from './my-comp-6126.component';

describe('MyComp6126Component', () => {
  let component: MyComp6126Component;
  let fixture: ComponentFixture<MyComp6126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
