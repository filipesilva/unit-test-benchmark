import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2424Component } from './my-comp-2424.component';

describe('MyComp2424Component', () => {
  let component: MyComp2424Component;
  let fixture: ComponentFixture<MyComp2424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
