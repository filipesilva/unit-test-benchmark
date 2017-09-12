import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6552Component } from './my-comp-6552.component';

describe('MyComp6552Component', () => {
  let component: MyComp6552Component;
  let fixture: ComponentFixture<MyComp6552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
