import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6985Component } from './my-comp-6985.component';

describe('MyComp6985Component', () => {
  let component: MyComp6985Component;
  let fixture: ComponentFixture<MyComp6985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
