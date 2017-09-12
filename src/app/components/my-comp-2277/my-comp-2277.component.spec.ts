import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2277Component } from './my-comp-2277.component';

describe('MyComp2277Component', () => {
  let component: MyComp2277Component;
  let fixture: ComponentFixture<MyComp2277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
