import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6746Component } from './my-comp-6746.component';

describe('MyComp6746Component', () => {
  let component: MyComp6746Component;
  let fixture: ComponentFixture<MyComp6746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
