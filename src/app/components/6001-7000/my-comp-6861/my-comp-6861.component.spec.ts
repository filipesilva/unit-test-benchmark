import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6861Component } from './my-comp-6861.component';

describe('MyComp6861Component', () => {
  let component: MyComp6861Component;
  let fixture: ComponentFixture<MyComp6861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
