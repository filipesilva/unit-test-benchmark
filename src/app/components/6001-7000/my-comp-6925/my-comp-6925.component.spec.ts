import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6925Component } from './my-comp-6925.component';

describe('MyComp6925Component', () => {
  let component: MyComp6925Component;
  let fixture: ComponentFixture<MyComp6925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
