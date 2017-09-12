import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7369Component } from './my-comp-7369.component';

describe('MyComp7369Component', () => {
  let component: MyComp7369Component;
  let fixture: ComponentFixture<MyComp7369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
