import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9971Component } from './my-comp-9971.component';

describe('MyComp9971Component', () => {
  let component: MyComp9971Component;
  let fixture: ComponentFixture<MyComp9971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
