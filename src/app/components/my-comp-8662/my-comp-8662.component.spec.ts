import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8662Component } from './my-comp-8662.component';

describe('MyComp8662Component', () => {
  let component: MyComp8662Component;
  let fixture: ComponentFixture<MyComp8662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
