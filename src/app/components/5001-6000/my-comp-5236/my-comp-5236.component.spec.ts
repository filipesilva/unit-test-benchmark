import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5236Component } from './my-comp-5236.component';

describe('MyComp5236Component', () => {
  let component: MyComp5236Component;
  let fixture: ComponentFixture<MyComp5236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
