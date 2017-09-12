import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8004Component } from './my-comp-8004.component';

describe('MyComp8004Component', () => {
  let component: MyComp8004Component;
  let fixture: ComponentFixture<MyComp8004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
