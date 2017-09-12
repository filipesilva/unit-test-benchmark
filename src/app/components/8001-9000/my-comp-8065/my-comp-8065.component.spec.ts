import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8065Component } from './my-comp-8065.component';

describe('MyComp8065Component', () => {
  let component: MyComp8065Component;
  let fixture: ComponentFixture<MyComp8065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
