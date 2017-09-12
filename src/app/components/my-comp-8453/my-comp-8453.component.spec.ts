import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8453Component } from './my-comp-8453.component';

describe('MyComp8453Component', () => {
  let component: MyComp8453Component;
  let fixture: ComponentFixture<MyComp8453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
