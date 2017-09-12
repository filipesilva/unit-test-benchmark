import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8533Component } from './my-comp-8533.component';

describe('MyComp8533Component', () => {
  let component: MyComp8533Component;
  let fixture: ComponentFixture<MyComp8533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
