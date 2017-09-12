import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8259Component } from './my-comp-8259.component';

describe('MyComp8259Component', () => {
  let component: MyComp8259Component;
  let fixture: ComponentFixture<MyComp8259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
