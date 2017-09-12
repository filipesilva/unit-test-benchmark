import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6859Component } from './my-comp-6859.component';

describe('MyComp6859Component', () => {
  let component: MyComp6859Component;
  let fixture: ComponentFixture<MyComp6859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
