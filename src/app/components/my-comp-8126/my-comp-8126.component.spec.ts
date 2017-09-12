import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8126Component } from './my-comp-8126.component';

describe('MyComp8126Component', () => {
  let component: MyComp8126Component;
  let fixture: ComponentFixture<MyComp8126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
