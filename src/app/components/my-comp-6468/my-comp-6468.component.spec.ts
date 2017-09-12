import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6468Component } from './my-comp-6468.component';

describe('MyComp6468Component', () => {
  let component: MyComp6468Component;
  let fixture: ComponentFixture<MyComp6468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
