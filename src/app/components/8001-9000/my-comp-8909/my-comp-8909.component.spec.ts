import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8909Component } from './my-comp-8909.component';

describe('MyComp8909Component', () => {
  let component: MyComp8909Component;
  let fixture: ComponentFixture<MyComp8909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
