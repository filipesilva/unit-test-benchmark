import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2084Component } from './my-comp-2084.component';

describe('MyComp2084Component', () => {
  let component: MyComp2084Component;
  let fixture: ComponentFixture<MyComp2084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
