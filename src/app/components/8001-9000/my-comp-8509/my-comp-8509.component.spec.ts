import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8509Component } from './my-comp-8509.component';

describe('MyComp8509Component', () => {
  let component: MyComp8509Component;
  let fixture: ComponentFixture<MyComp8509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
