import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6847Component } from './my-comp-6847.component';

describe('MyComp6847Component', () => {
  let component: MyComp6847Component;
  let fixture: ComponentFixture<MyComp6847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
