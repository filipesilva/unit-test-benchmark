import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6098Component } from './my-comp-6098.component';

describe('MyComp6098Component', () => {
  let component: MyComp6098Component;
  let fixture: ComponentFixture<MyComp6098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
