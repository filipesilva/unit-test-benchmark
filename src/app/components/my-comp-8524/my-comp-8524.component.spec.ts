import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8524Component } from './my-comp-8524.component';

describe('MyComp8524Component', () => {
  let component: MyComp8524Component;
  let fixture: ComponentFixture<MyComp8524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
