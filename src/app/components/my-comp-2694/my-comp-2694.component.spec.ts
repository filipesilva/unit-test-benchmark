import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2694Component } from './my-comp-2694.component';

describe('MyComp2694Component', () => {
  let component: MyComp2694Component;
  let fixture: ComponentFixture<MyComp2694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
