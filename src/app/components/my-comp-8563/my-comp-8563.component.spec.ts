import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8563Component } from './my-comp-8563.component';

describe('MyComp8563Component', () => {
  let component: MyComp8563Component;
  let fixture: ComponentFixture<MyComp8563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
