import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8301Component } from './my-comp-8301.component';

describe('MyComp8301Component', () => {
  let component: MyComp8301Component;
  let fixture: ComponentFixture<MyComp8301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
