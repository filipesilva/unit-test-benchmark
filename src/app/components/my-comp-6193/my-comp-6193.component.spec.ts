import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6193Component } from './my-comp-6193.component';

describe('MyComp6193Component', () => {
  let component: MyComp6193Component;
  let fixture: ComponentFixture<MyComp6193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
