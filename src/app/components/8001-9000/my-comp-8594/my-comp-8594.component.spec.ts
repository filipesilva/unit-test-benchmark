import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8594Component } from './my-comp-8594.component';

describe('MyComp8594Component', () => {
  let component: MyComp8594Component;
  let fixture: ComponentFixture<MyComp8594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
