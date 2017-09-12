import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6391Component } from './my-comp-6391.component';

describe('MyComp6391Component', () => {
  let component: MyComp6391Component;
  let fixture: ComponentFixture<MyComp6391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
