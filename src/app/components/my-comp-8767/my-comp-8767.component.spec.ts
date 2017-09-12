import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8767Component } from './my-comp-8767.component';

describe('MyComp8767Component', () => {
  let component: MyComp8767Component;
  let fixture: ComponentFixture<MyComp8767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
