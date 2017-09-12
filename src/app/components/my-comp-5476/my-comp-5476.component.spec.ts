import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5476Component } from './my-comp-5476.component';

describe('MyComp5476Component', () => {
  let component: MyComp5476Component;
  let fixture: ComponentFixture<MyComp5476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
