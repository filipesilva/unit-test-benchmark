import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6487Component } from './my-comp-6487.component';

describe('MyComp6487Component', () => {
  let component: MyComp6487Component;
  let fixture: ComponentFixture<MyComp6487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
