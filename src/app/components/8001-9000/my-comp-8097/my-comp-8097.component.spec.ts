import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8097Component } from './my-comp-8097.component';

describe('MyComp8097Component', () => {
  let component: MyComp8097Component;
  let fixture: ComponentFixture<MyComp8097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
