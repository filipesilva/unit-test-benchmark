import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6957Component } from './my-comp-6957.component';

describe('MyComp6957Component', () => {
  let component: MyComp6957Component;
  let fixture: ComponentFixture<MyComp6957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
