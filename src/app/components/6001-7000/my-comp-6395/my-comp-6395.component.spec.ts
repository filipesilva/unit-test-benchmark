import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6395Component } from './my-comp-6395.component';

describe('MyComp6395Component', () => {
  let component: MyComp6395Component;
  let fixture: ComponentFixture<MyComp6395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
