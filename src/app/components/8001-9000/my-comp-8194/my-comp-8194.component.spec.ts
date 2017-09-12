import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8194Component } from './my-comp-8194.component';

describe('MyComp8194Component', () => {
  let component: MyComp8194Component;
  let fixture: ComponentFixture<MyComp8194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
