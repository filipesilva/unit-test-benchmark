import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8341Component } from './my-comp-8341.component';

describe('MyComp8341Component', () => {
  let component: MyComp8341Component;
  let fixture: ComponentFixture<MyComp8341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
