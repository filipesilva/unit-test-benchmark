import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8440Component } from './my-comp-8440.component';

describe('MyComp8440Component', () => {
  let component: MyComp8440Component;
  let fixture: ComponentFixture<MyComp8440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
