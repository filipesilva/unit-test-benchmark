import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5400Component } from './my-comp-5400.component';

describe('MyComp5400Component', () => {
  let component: MyComp5400Component;
  let fixture: ComponentFixture<MyComp5400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
