import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2655Component } from './my-comp-2655.component';

describe('MyComp2655Component', () => {
  let component: MyComp2655Component;
  let fixture: ComponentFixture<MyComp2655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
