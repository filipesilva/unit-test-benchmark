import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8219Component } from './my-comp-8219.component';

describe('MyComp8219Component', () => {
  let component: MyComp8219Component;
  let fixture: ComponentFixture<MyComp8219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
