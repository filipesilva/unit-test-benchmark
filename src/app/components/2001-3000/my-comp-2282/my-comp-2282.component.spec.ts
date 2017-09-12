import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2282Component } from './my-comp-2282.component';

describe('MyComp2282Component', () => {
  let component: MyComp2282Component;
  let fixture: ComponentFixture<MyComp2282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
