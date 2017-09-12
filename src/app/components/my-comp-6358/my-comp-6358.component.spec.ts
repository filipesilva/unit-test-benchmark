import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6358Component } from './my-comp-6358.component';

describe('MyComp6358Component', () => {
  let component: MyComp6358Component;
  let fixture: ComponentFixture<MyComp6358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
