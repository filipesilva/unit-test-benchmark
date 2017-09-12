import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp590Component } from './my-comp-590.component';

describe('MyComp590Component', () => {
  let component: MyComp590Component;
  let fixture: ComponentFixture<MyComp590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
