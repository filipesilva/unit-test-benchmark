import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6150Component } from './my-comp-6150.component';

describe('MyComp6150Component', () => {
  let component: MyComp6150Component;
  let fixture: ComponentFixture<MyComp6150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
