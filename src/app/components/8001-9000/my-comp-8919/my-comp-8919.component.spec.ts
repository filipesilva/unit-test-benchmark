import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8919Component } from './my-comp-8919.component';

describe('MyComp8919Component', () => {
  let component: MyComp8919Component;
  let fixture: ComponentFixture<MyComp8919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
