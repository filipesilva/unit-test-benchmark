import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6027Component } from './my-comp-6027.component';

describe('MyComp6027Component', () => {
  let component: MyComp6027Component;
  let fixture: ComponentFixture<MyComp6027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
