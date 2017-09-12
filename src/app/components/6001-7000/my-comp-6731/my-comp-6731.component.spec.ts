import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6731Component } from './my-comp-6731.component';

describe('MyComp6731Component', () => {
  let component: MyComp6731Component;
  let fixture: ComponentFixture<MyComp6731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
