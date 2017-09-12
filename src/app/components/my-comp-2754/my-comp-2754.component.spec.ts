import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2754Component } from './my-comp-2754.component';

describe('MyComp2754Component', () => {
  let component: MyComp2754Component;
  let fixture: ComponentFixture<MyComp2754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
