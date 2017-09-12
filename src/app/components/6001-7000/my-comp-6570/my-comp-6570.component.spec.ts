import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6570Component } from './my-comp-6570.component';

describe('MyComp6570Component', () => {
  let component: MyComp6570Component;
  let fixture: ComponentFixture<MyComp6570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
