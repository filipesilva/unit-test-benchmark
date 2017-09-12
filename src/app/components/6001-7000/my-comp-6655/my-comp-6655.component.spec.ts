import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6655Component } from './my-comp-6655.component';

describe('MyComp6655Component', () => {
  let component: MyComp6655Component;
  let fixture: ComponentFixture<MyComp6655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
