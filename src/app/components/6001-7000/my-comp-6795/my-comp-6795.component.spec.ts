import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6795Component } from './my-comp-6795.component';

describe('MyComp6795Component', () => {
  let component: MyComp6795Component;
  let fixture: ComponentFixture<MyComp6795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
