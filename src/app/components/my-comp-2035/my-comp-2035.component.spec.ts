import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2035Component } from './my-comp-2035.component';

describe('MyComp2035Component', () => {
  let component: MyComp2035Component;
  let fixture: ComponentFixture<MyComp2035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
