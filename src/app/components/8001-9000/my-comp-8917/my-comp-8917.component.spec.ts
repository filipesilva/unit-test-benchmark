import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8917Component } from './my-comp-8917.component';

describe('MyComp8917Component', () => {
  let component: MyComp8917Component;
  let fixture: ComponentFixture<MyComp8917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
