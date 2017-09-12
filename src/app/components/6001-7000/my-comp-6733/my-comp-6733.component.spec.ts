import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6733Component } from './my-comp-6733.component';

describe('MyComp6733Component', () => {
  let component: MyComp6733Component;
  let fixture: ComponentFixture<MyComp6733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
