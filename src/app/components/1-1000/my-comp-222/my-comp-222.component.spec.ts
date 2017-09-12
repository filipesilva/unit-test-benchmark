import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp222Component } from './my-comp-222.component';

describe('MyComp222Component', () => {
  let component: MyComp222Component;
  let fixture: ComponentFixture<MyComp222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
