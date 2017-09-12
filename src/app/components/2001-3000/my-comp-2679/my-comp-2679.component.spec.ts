import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2679Component } from './my-comp-2679.component';

describe('MyComp2679Component', () => {
  let component: MyComp2679Component;
  let fixture: ComponentFixture<MyComp2679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
