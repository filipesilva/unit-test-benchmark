import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6120Component } from './my-comp-6120.component';

describe('MyComp6120Component', () => {
  let component: MyComp6120Component;
  let fixture: ComponentFixture<MyComp6120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
