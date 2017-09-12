import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp744Component } from './my-comp-744.component';

describe('MyComp744Component', () => {
  let component: MyComp744Component;
  let fixture: ComponentFixture<MyComp744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
