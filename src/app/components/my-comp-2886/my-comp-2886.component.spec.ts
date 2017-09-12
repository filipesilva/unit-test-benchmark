import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2886Component } from './my-comp-2886.component';

describe('MyComp2886Component', () => {
  let component: MyComp2886Component;
  let fixture: ComponentFixture<MyComp2886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
