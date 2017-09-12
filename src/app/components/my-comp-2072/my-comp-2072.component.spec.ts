import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2072Component } from './my-comp-2072.component';

describe('MyComp2072Component', () => {
  let component: MyComp2072Component;
  let fixture: ComponentFixture<MyComp2072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
