import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8237Component } from './my-comp-8237.component';

describe('MyComp8237Component', () => {
  let component: MyComp8237Component;
  let fixture: ComponentFixture<MyComp8237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
