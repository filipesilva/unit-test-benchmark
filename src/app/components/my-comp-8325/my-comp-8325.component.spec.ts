import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8325Component } from './my-comp-8325.component';

describe('MyComp8325Component', () => {
  let component: MyComp8325Component;
  let fixture: ComponentFixture<MyComp8325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
