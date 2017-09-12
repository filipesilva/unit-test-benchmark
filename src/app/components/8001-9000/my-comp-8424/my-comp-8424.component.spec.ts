import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8424Component } from './my-comp-8424.component';

describe('MyComp8424Component', () => {
  let component: MyComp8424Component;
  let fixture: ComponentFixture<MyComp8424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
