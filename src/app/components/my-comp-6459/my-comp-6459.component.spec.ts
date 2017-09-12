import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6459Component } from './my-comp-6459.component';

describe('MyComp6459Component', () => {
  let component: MyComp6459Component;
  let fixture: ComponentFixture<MyComp6459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
