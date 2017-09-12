import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8275Component } from './my-comp-8275.component';

describe('MyComp8275Component', () => {
  let component: MyComp8275Component;
  let fixture: ComponentFixture<MyComp8275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
