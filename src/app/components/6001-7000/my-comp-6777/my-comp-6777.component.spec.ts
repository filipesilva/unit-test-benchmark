import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6777Component } from './my-comp-6777.component';

describe('MyComp6777Component', () => {
  let component: MyComp6777Component;
  let fixture: ComponentFixture<MyComp6777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
