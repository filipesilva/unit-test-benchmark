import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2012Component } from './my-comp-2012.component';

describe('MyComp2012Component', () => {
  let component: MyComp2012Component;
  let fixture: ComponentFixture<MyComp2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
