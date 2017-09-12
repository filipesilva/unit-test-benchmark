import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8445Component } from './my-comp-8445.component';

describe('MyComp8445Component', () => {
  let component: MyComp8445Component;
  let fixture: ComponentFixture<MyComp8445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
