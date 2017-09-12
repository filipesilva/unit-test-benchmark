import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8507Component } from './my-comp-8507.component';

describe('MyComp8507Component', () => {
  let component: MyComp8507Component;
  let fixture: ComponentFixture<MyComp8507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
