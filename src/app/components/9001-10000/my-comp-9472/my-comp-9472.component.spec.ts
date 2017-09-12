import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9472Component } from './my-comp-9472.component';

describe('MyComp9472Component', () => {
  let component: MyComp9472Component;
  let fixture: ComponentFixture<MyComp9472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
