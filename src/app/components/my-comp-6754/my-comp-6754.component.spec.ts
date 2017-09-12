import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6754Component } from './my-comp-6754.component';

describe('MyComp6754Component', () => {
  let component: MyComp6754Component;
  let fixture: ComponentFixture<MyComp6754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
