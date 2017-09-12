import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6114Component } from './my-comp-6114.component';

describe('MyComp6114Component', () => {
  let component: MyComp6114Component;
  let fixture: ComponentFixture<MyComp6114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
