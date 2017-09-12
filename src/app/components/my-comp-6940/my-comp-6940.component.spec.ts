import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6940Component } from './my-comp-6940.component';

describe('MyComp6940Component', () => {
  let component: MyComp6940Component;
  let fixture: ComponentFixture<MyComp6940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
