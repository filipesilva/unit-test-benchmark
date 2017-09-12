import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5833Component } from './my-comp-5833.component';

describe('MyComp5833Component', () => {
  let component: MyComp5833Component;
  let fixture: ComponentFixture<MyComp5833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
