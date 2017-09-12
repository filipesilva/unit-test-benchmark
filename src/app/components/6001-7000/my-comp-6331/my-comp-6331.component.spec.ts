import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6331Component } from './my-comp-6331.component';

describe('MyComp6331Component', () => {
  let component: MyComp6331Component;
  let fixture: ComponentFixture<MyComp6331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
