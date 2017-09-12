import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8967Component } from './my-comp-8967.component';

describe('MyComp8967Component', () => {
  let component: MyComp8967Component;
  let fixture: ComponentFixture<MyComp8967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
