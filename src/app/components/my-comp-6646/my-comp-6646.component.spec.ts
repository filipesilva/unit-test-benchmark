import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6646Component } from './my-comp-6646.component';

describe('MyComp6646Component', () => {
  let component: MyComp6646Component;
  let fixture: ComponentFixture<MyComp6646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
