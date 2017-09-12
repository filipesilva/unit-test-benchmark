import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8415Component } from './my-comp-8415.component';

describe('MyComp8415Component', () => {
  let component: MyComp8415Component;
  let fixture: ComponentFixture<MyComp8415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
