import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2097Component } from './my-comp-2097.component';

describe('MyComp2097Component', () => {
  let component: MyComp2097Component;
  let fixture: ComponentFixture<MyComp2097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
