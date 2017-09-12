import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp766Component } from './my-comp-766.component';

describe('MyComp766Component', () => {
  let component: MyComp766Component;
  let fixture: ComponentFixture<MyComp766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
