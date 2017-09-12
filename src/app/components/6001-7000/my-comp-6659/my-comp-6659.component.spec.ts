import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6659Component } from './my-comp-6659.component';

describe('MyComp6659Component', () => {
  let component: MyComp6659Component;
  let fixture: ComponentFixture<MyComp6659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
