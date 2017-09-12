import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2450Component } from './my-comp-2450.component';

describe('MyComp2450Component', () => {
  let component: MyComp2450Component;
  let fixture: ComponentFixture<MyComp2450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
