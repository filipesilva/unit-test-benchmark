import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8538Component } from './my-comp-8538.component';

describe('MyComp8538Component', () => {
  let component: MyComp8538Component;
  let fixture: ComponentFixture<MyComp8538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
