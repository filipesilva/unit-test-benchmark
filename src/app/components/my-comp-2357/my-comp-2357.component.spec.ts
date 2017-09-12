import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2357Component } from './my-comp-2357.component';

describe('MyComp2357Component', () => {
  let component: MyComp2357Component;
  let fixture: ComponentFixture<MyComp2357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
