import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2744Component } from './my-comp-2744.component';

describe('MyComp2744Component', () => {
  let component: MyComp2744Component;
  let fixture: ComponentFixture<MyComp2744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
