import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5590Component } from './my-comp-5590.component';

describe('MyComp5590Component', () => {
  let component: MyComp5590Component;
  let fixture: ComponentFixture<MyComp5590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
