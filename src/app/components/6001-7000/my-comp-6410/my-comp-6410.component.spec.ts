import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6410Component } from './my-comp-6410.component';

describe('MyComp6410Component', () => {
  let component: MyComp6410Component;
  let fixture: ComponentFixture<MyComp6410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
