import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6387Component } from './my-comp-6387.component';

describe('MyComp6387Component', () => {
  let component: MyComp6387Component;
  let fixture: ComponentFixture<MyComp6387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
