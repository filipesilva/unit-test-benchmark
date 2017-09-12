import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2596Component } from './my-comp-2596.component';

describe('MyComp2596Component', () => {
  let component: MyComp2596Component;
  let fixture: ComponentFixture<MyComp2596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
