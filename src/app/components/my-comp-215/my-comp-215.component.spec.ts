import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp215Component } from './my-comp-215.component';

describe('MyComp215Component', () => {
  let component: MyComp215Component;
  let fixture: ComponentFixture<MyComp215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
