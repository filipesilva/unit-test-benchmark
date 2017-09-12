import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8700Component } from './my-comp-8700.component';

describe('MyComp8700Component', () => {
  let component: MyComp8700Component;
  let fixture: ComponentFixture<MyComp8700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
