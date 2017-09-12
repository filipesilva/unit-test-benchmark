import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8758Component } from './my-comp-8758.component';

describe('MyComp8758Component', () => {
  let component: MyComp8758Component;
  let fixture: ComponentFixture<MyComp8758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
