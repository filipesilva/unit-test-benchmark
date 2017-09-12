import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp315Component } from './my-comp-315.component';

describe('MyComp315Component', () => {
  let component: MyComp315Component;
  let fixture: ComponentFixture<MyComp315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
