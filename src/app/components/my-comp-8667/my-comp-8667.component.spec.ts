import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8667Component } from './my-comp-8667.component';

describe('MyComp8667Component', () => {
  let component: MyComp8667Component;
  let fixture: ComponentFixture<MyComp8667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
