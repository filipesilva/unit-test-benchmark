import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2009Component } from './my-comp-2009.component';

describe('MyComp2009Component', () => {
  let component: MyComp2009Component;
  let fixture: ComponentFixture<MyComp2009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
