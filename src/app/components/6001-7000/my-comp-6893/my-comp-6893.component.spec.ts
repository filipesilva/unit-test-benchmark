import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6893Component } from './my-comp-6893.component';

describe('MyComp6893Component', () => {
  let component: MyComp6893Component;
  let fixture: ComponentFixture<MyComp6893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
