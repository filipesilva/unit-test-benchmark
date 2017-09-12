import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8782Component } from './my-comp-8782.component';

describe('MyComp8782Component', () => {
  let component: MyComp8782Component;
  let fixture: ComponentFixture<MyComp8782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
