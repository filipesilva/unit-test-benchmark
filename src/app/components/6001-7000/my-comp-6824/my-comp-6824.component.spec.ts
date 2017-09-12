import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6824Component } from './my-comp-6824.component';

describe('MyComp6824Component', () => {
  let component: MyComp6824Component;
  let fixture: ComponentFixture<MyComp6824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
