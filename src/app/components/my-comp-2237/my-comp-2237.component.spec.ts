import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2237Component } from './my-comp-2237.component';

describe('MyComp2237Component', () => {
  let component: MyComp2237Component;
  let fixture: ComponentFixture<MyComp2237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
