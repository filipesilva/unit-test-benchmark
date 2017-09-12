import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2114Component } from './my-comp-2114.component';

describe('MyComp2114Component', () => {
  let component: MyComp2114Component;
  let fixture: ComponentFixture<MyComp2114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
