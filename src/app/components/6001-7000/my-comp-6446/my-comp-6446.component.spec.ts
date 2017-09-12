import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6446Component } from './my-comp-6446.component';

describe('MyComp6446Component', () => {
  let component: MyComp6446Component;
  let fixture: ComponentFixture<MyComp6446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
