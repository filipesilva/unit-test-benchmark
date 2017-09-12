import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8277Component } from './my-comp-8277.component';

describe('MyComp8277Component', () => {
  let component: MyComp8277Component;
  let fixture: ComponentFixture<MyComp8277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
