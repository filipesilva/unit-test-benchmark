import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6564Component } from './my-comp-6564.component';

describe('MyComp6564Component', () => {
  let component: MyComp6564Component;
  let fixture: ComponentFixture<MyComp6564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
