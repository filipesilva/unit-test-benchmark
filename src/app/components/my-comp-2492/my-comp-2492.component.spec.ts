import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2492Component } from './my-comp-2492.component';

describe('MyComp2492Component', () => {
  let component: MyComp2492Component;
  let fixture: ComponentFixture<MyComp2492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
