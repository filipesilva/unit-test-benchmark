import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8801Component } from './my-comp-8801.component';

describe('MyComp8801Component', () => {
  let component: MyComp8801Component;
  let fixture: ComponentFixture<MyComp8801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
