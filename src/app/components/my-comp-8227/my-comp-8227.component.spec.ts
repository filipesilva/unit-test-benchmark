import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8227Component } from './my-comp-8227.component';

describe('MyComp8227Component', () => {
  let component: MyComp8227Component;
  let fixture: ComponentFixture<MyComp8227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
