import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8715Component } from './my-comp-8715.component';

describe('MyComp8715Component', () => {
  let component: MyComp8715Component;
  let fixture: ComponentFixture<MyComp8715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
