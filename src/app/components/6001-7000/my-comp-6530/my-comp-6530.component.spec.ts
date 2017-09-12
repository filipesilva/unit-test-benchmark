import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6530Component } from './my-comp-6530.component';

describe('MyComp6530Component', () => {
  let component: MyComp6530Component;
  let fixture: ComponentFixture<MyComp6530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
