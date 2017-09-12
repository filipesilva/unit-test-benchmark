import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6588Component } from './my-comp-6588.component';

describe('MyComp6588Component', () => {
  let component: MyComp6588Component;
  let fixture: ComponentFixture<MyComp6588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
