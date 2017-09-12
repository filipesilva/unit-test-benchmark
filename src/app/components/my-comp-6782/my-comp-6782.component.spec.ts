import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6782Component } from './my-comp-6782.component';

describe('MyComp6782Component', () => {
  let component: MyComp6782Component;
  let fixture: ComponentFixture<MyComp6782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
