import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6028Component } from './my-comp-6028.component';

describe('MyComp6028Component', () => {
  let component: MyComp6028Component;
  let fixture: ComponentFixture<MyComp6028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
