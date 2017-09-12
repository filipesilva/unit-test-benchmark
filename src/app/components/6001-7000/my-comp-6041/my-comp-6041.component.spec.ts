import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6041Component } from './my-comp-6041.component';

describe('MyComp6041Component', () => {
  let component: MyComp6041Component;
  let fixture: ComponentFixture<MyComp6041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
