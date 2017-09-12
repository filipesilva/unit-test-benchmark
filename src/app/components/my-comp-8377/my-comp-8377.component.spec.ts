import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8377Component } from './my-comp-8377.component';

describe('MyComp8377Component', () => {
  let component: MyComp8377Component;
  let fixture: ComponentFixture<MyComp8377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
