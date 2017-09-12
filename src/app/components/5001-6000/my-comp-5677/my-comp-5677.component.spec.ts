import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5677Component } from './my-comp-5677.component';

describe('MyComp5677Component', () => {
  let component: MyComp5677Component;
  let fixture: ComponentFixture<MyComp5677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
