import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2276Component } from './my-comp-2276.component';

describe('MyComp2276Component', () => {
  let component: MyComp2276Component;
  let fixture: ComponentFixture<MyComp2276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
