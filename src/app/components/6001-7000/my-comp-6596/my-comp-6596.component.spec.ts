import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6596Component } from './my-comp-6596.component';

describe('MyComp6596Component', () => {
  let component: MyComp6596Component;
  let fixture: ComponentFixture<MyComp6596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
