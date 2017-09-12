import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6132Component } from './my-comp-6132.component';

describe('MyComp6132Component', () => {
  let component: MyComp6132Component;
  let fixture: ComponentFixture<MyComp6132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
