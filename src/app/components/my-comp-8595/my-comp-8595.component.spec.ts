import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8595Component } from './my-comp-8595.component';

describe('MyComp8595Component', () => {
  let component: MyComp8595Component;
  let fixture: ComponentFixture<MyComp8595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
