import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6692Component } from './my-comp-6692.component';

describe('MyComp6692Component', () => {
  let component: MyComp6692Component;
  let fixture: ComponentFixture<MyComp6692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
