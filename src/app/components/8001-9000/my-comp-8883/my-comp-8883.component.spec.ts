import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8883Component } from './my-comp-8883.component';

describe('MyComp8883Component', () => {
  let component: MyComp8883Component;
  let fixture: ComponentFixture<MyComp8883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
