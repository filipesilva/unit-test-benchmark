import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8499Component } from './my-comp-8499.component';

describe('MyComp8499Component', () => {
  let component: MyComp8499Component;
  let fixture: ComponentFixture<MyComp8499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
