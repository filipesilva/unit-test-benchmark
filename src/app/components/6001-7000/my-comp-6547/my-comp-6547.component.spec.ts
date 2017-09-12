import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6547Component } from './my-comp-6547.component';

describe('MyComp6547Component', () => {
  let component: MyComp6547Component;
  let fixture: ComponentFixture<MyComp6547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
