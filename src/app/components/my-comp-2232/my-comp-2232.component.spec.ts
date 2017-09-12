import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2232Component } from './my-comp-2232.component';

describe('MyComp2232Component', () => {
  let component: MyComp2232Component;
  let fixture: ComponentFixture<MyComp2232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
