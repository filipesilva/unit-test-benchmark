import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5594Component } from './my-comp-5594.component';

describe('MyComp5594Component', () => {
  let component: MyComp5594Component;
  let fixture: ComponentFixture<MyComp5594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
