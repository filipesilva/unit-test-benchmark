import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8833Component } from './my-comp-8833.component';

describe('MyComp8833Component', () => {
  let component: MyComp8833Component;
  let fixture: ComponentFixture<MyComp8833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
