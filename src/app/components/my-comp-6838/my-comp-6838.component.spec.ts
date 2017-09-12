import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6838Component } from './my-comp-6838.component';

describe('MyComp6838Component', () => {
  let component: MyComp6838Component;
  let fixture: ComponentFixture<MyComp6838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
