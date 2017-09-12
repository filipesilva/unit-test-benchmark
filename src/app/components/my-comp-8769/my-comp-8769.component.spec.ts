import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8769Component } from './my-comp-8769.component';

describe('MyComp8769Component', () => {
  let component: MyComp8769Component;
  let fixture: ComponentFixture<MyComp8769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
