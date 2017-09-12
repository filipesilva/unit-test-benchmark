import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp732Component } from './my-comp-732.component';

describe('MyComp732Component', () => {
  let component: MyComp732Component;
  let fixture: ComponentFixture<MyComp732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
