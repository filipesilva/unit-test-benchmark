import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8550Component } from './my-comp-8550.component';

describe('MyComp8550Component', () => {
  let component: MyComp8550Component;
  let fixture: ComponentFixture<MyComp8550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
