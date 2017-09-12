import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8658Component } from './my-comp-8658.component';

describe('MyComp8658Component', () => {
  let component: MyComp8658Component;
  let fixture: ComponentFixture<MyComp8658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
