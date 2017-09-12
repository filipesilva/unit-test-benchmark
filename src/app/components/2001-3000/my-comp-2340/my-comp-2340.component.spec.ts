import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2340Component } from './my-comp-2340.component';

describe('MyComp2340Component', () => {
  let component: MyComp2340Component;
  let fixture: ComponentFixture<MyComp2340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
