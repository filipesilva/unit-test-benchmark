import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6201Component } from './my-comp-6201.component';

describe('MyComp6201Component', () => {
  let component: MyComp6201Component;
  let fixture: ComponentFixture<MyComp6201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
