import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6897Component } from './my-comp-6897.component';

describe('MyComp6897Component', () => {
  let component: MyComp6897Component;
  let fixture: ComponentFixture<MyComp6897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
