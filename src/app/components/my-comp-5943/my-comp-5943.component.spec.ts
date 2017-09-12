import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5943Component } from './my-comp-5943.component';

describe('MyComp5943Component', () => {
  let component: MyComp5943Component;
  let fixture: ComponentFixture<MyComp5943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
