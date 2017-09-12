import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6967Component } from './my-comp-6967.component';

describe('MyComp6967Component', () => {
  let component: MyComp6967Component;
  let fixture: ComponentFixture<MyComp6967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
