import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8562Component } from './my-comp-8562.component';

describe('MyComp8562Component', () => {
  let component: MyComp8562Component;
  let fixture: ComponentFixture<MyComp8562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
