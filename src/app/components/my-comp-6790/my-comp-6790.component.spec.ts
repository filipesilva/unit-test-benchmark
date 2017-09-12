import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6790Component } from './my-comp-6790.component';

describe('MyComp6790Component', () => {
  let component: MyComp6790Component;
  let fixture: ComponentFixture<MyComp6790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
