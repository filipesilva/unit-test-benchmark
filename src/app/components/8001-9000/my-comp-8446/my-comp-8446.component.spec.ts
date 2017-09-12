import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8446Component } from './my-comp-8446.component';

describe('MyComp8446Component', () => {
  let component: MyComp8446Component;
  let fixture: ComponentFixture<MyComp8446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
