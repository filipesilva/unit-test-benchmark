import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8604Component } from './my-comp-8604.component';

describe('MyComp8604Component', () => {
  let component: MyComp8604Component;
  let fixture: ComponentFixture<MyComp8604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
