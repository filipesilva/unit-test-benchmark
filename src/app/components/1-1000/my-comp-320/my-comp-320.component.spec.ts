import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp320Component } from './my-comp-320.component';

describe('MyComp320Component', () => {
  let component: MyComp320Component;
  let fixture: ComponentFixture<MyComp320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
