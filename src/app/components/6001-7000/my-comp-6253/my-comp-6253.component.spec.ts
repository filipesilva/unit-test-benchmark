import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6253Component } from './my-comp-6253.component';

describe('MyComp6253Component', () => {
  let component: MyComp6253Component;
  let fixture: ComponentFixture<MyComp6253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
