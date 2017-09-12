import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8987Component } from './my-comp-8987.component';

describe('MyComp8987Component', () => {
  let component: MyComp8987Component;
  let fixture: ComponentFixture<MyComp8987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
