import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5275Component } from './my-comp-5275.component';

describe('MyComp5275Component', () => {
  let component: MyComp5275Component;
  let fixture: ComponentFixture<MyComp5275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
