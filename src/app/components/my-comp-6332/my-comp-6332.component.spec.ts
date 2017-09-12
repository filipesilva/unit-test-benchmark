import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6332Component } from './my-comp-6332.component';

describe('MyComp6332Component', () => {
  let component: MyComp6332Component;
  let fixture: ComponentFixture<MyComp6332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
