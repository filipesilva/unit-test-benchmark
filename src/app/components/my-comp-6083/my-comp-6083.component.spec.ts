import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6083Component } from './my-comp-6083.component';

describe('MyComp6083Component', () => {
  let component: MyComp6083Component;
  let fixture: ComponentFixture<MyComp6083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
