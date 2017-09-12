import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8168Component } from './my-comp-8168.component';

describe('MyComp8168Component', () => {
  let component: MyComp8168Component;
  let fixture: ComponentFixture<MyComp8168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
