import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2943Component } from './my-comp-2943.component';

describe('MyComp2943Component', () => {
  let component: MyComp2943Component;
  let fixture: ComponentFixture<MyComp2943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
