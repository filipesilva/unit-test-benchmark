import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6116Component } from './my-comp-6116.component';

describe('MyComp6116Component', () => {
  let component: MyComp6116Component;
  let fixture: ComponentFixture<MyComp6116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
