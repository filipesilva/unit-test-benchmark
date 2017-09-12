import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8741Component } from './my-comp-8741.component';

describe('MyComp8741Component', () => {
  let component: MyComp8741Component;
  let fixture: ComponentFixture<MyComp8741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
