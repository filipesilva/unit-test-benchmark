import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9726Component } from './my-comp-9726.component';

describe('MyComp9726Component', () => {
  let component: MyComp9726Component;
  let fixture: ComponentFixture<MyComp9726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
