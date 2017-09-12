import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8834Component } from './my-comp-8834.component';

describe('MyComp8834Component', () => {
  let component: MyComp8834Component;
  let fixture: ComponentFixture<MyComp8834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
