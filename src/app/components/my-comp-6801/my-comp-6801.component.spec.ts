import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6801Component } from './my-comp-6801.component';

describe('MyComp6801Component', () => {
  let component: MyComp6801Component;
  let fixture: ComponentFixture<MyComp6801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
