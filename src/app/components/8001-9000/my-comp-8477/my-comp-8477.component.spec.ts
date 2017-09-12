import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8477Component } from './my-comp-8477.component';

describe('MyComp8477Component', () => {
  let component: MyComp8477Component;
  let fixture: ComponentFixture<MyComp8477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
