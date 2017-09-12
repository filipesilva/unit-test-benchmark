import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4653Component } from './my-comp-4653.component';

describe('MyComp4653Component', () => {
  let component: MyComp4653Component;
  let fixture: ComponentFixture<MyComp4653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
