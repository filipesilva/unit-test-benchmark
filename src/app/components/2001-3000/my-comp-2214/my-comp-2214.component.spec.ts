import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2214Component } from './my-comp-2214.component';

describe('MyComp2214Component', () => {
  let component: MyComp2214Component;
  let fixture: ComponentFixture<MyComp2214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
