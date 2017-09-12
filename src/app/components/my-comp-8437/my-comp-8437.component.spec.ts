import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8437Component } from './my-comp-8437.component';

describe('MyComp8437Component', () => {
  let component: MyComp8437Component;
  let fixture: ComponentFixture<MyComp8437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
