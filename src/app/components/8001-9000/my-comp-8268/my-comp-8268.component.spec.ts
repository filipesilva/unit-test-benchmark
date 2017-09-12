import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8268Component } from './my-comp-8268.component';

describe('MyComp8268Component', () => {
  let component: MyComp8268Component;
  let fixture: ComponentFixture<MyComp8268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
