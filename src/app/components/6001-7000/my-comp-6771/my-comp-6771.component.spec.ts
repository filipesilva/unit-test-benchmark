import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6771Component } from './my-comp-6771.component';

describe('MyComp6771Component', () => {
  let component: MyComp6771Component;
  let fixture: ComponentFixture<MyComp6771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
