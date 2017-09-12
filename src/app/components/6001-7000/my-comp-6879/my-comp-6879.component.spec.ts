import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6879Component } from './my-comp-6879.component';

describe('MyComp6879Component', () => {
  let component: MyComp6879Component;
  let fixture: ComponentFixture<MyComp6879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
