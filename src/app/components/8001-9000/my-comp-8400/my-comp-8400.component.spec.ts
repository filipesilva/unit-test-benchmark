import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8400Component } from './my-comp-8400.component';

describe('MyComp8400Component', () => {
  let component: MyComp8400Component;
  let fixture: ComponentFixture<MyComp8400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
