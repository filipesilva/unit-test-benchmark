import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8292Component } from './my-comp-8292.component';

describe('MyComp8292Component', () => {
  let component: MyComp8292Component;
  let fixture: ComponentFixture<MyComp8292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
