import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8124Component } from './my-comp-8124.component';

describe('MyComp8124Component', () => {
  let component: MyComp8124Component;
  let fixture: ComponentFixture<MyComp8124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
