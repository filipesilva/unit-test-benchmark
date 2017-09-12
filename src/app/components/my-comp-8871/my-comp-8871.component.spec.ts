import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8871Component } from './my-comp-8871.component';

describe('MyComp8871Component', () => {
  let component: MyComp8871Component;
  let fixture: ComponentFixture<MyComp8871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
