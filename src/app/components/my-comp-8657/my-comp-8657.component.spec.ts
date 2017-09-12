import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8657Component } from './my-comp-8657.component';

describe('MyComp8657Component', () => {
  let component: MyComp8657Component;
  let fixture: ComponentFixture<MyComp8657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
