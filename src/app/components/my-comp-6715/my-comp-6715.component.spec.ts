import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6715Component } from './my-comp-6715.component';

describe('MyComp6715Component', () => {
  let component: MyComp6715Component;
  let fixture: ComponentFixture<MyComp6715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
