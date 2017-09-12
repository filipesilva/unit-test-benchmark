import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8205Component } from './my-comp-8205.component';

describe('MyComp8205Component', () => {
  let component: MyComp8205Component;
  let fixture: ComponentFixture<MyComp8205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
