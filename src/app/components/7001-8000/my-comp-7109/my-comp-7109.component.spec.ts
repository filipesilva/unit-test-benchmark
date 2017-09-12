import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7109Component } from './my-comp-7109.component';

describe('MyComp7109Component', () => {
  let component: MyComp7109Component;
  let fixture: ComponentFixture<MyComp7109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
