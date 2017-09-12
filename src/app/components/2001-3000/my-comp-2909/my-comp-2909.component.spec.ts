import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2909Component } from './my-comp-2909.component';

describe('MyComp2909Component', () => {
  let component: MyComp2909Component;
  let fixture: ComponentFixture<MyComp2909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
