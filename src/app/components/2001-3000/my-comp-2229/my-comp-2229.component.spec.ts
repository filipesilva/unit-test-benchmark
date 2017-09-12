import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2229Component } from './my-comp-2229.component';

describe('MyComp2229Component', () => {
  let component: MyComp2229Component;
  let fixture: ComponentFixture<MyComp2229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
