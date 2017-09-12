import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6987Component } from './my-comp-6987.component';

describe('MyComp6987Component', () => {
  let component: MyComp6987Component;
  let fixture: ComponentFixture<MyComp6987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
