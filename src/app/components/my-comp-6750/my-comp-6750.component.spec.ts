import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6750Component } from './my-comp-6750.component';

describe('MyComp6750Component', () => {
  let component: MyComp6750Component;
  let fixture: ComponentFixture<MyComp6750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
