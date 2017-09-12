import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6775Component } from './my-comp-6775.component';

describe('MyComp6775Component', () => {
  let component: MyComp6775Component;
  let fixture: ComponentFixture<MyComp6775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
