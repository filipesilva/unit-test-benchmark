import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6844Component } from './my-comp-6844.component';

describe('MyComp6844Component', () => {
  let component: MyComp6844Component;
  let fixture: ComponentFixture<MyComp6844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
