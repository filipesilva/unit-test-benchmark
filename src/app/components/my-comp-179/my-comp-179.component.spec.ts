import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp179Component } from './my-comp-179.component';

describe('MyComp179Component', () => {
  let component: MyComp179Component;
  let fixture: ComponentFixture<MyComp179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
