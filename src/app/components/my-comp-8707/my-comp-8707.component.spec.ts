import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8707Component } from './my-comp-8707.component';

describe('MyComp8707Component', () => {
  let component: MyComp8707Component;
  let fixture: ComponentFixture<MyComp8707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
