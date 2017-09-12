import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2223Component } from './my-comp-2223.component';

describe('MyComp2223Component', () => {
  let component: MyComp2223Component;
  let fixture: ComponentFixture<MyComp2223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
