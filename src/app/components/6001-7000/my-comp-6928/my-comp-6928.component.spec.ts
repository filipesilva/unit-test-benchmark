import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6928Component } from './my-comp-6928.component';

describe('MyComp6928Component', () => {
  let component: MyComp6928Component;
  let fixture: ComponentFixture<MyComp6928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
