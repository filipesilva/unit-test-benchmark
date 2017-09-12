import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6653Component } from './my-comp-6653.component';

describe('MyComp6653Component', () => {
  let component: MyComp6653Component;
  let fixture: ComponentFixture<MyComp6653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
