import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2124Component } from './my-comp-2124.component';

describe('MyComp2124Component', () => {
  let component: MyComp2124Component;
  let fixture: ComponentFixture<MyComp2124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
