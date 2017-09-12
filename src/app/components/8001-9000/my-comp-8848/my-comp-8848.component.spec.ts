import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8848Component } from './my-comp-8848.component';

describe('MyComp8848Component', () => {
  let component: MyComp8848Component;
  let fixture: ComponentFixture<MyComp8848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
