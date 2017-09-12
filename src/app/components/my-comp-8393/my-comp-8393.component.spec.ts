import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8393Component } from './my-comp-8393.component';

describe('MyComp8393Component', () => {
  let component: MyComp8393Component;
  let fixture: ComponentFixture<MyComp8393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
