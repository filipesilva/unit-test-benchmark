import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8425Component } from './my-comp-8425.component';

describe('MyComp8425Component', () => {
  let component: MyComp8425Component;
  let fixture: ComponentFixture<MyComp8425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
