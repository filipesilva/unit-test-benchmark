import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2964Component } from './my-comp-2964.component';

describe('MyComp2964Component', () => {
  let component: MyComp2964Component;
  let fixture: ComponentFixture<MyComp2964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
