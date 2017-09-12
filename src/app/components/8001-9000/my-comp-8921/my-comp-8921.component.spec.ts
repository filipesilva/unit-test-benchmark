import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8921Component } from './my-comp-8921.component';

describe('MyComp8921Component', () => {
  let component: MyComp8921Component;
  let fixture: ComponentFixture<MyComp8921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
