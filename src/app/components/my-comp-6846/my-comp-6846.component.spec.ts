import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6846Component } from './my-comp-6846.component';

describe('MyComp6846Component', () => {
  let component: MyComp6846Component;
  let fixture: ComponentFixture<MyComp6846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
