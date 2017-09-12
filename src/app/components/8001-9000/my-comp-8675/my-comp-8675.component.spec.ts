import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8675Component } from './my-comp-8675.component';

describe('MyComp8675Component', () => {
  let component: MyComp8675Component;
  let fixture: ComponentFixture<MyComp8675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
