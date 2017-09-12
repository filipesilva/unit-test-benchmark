import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6340Component } from './my-comp-6340.component';

describe('MyComp6340Component', () => {
  let component: MyComp6340Component;
  let fixture: ComponentFixture<MyComp6340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
