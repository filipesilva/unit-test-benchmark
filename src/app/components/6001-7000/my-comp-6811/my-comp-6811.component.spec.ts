import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6811Component } from './my-comp-6811.component';

describe('MyComp6811Component', () => {
  let component: MyComp6811Component;
  let fixture: ComponentFixture<MyComp6811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
