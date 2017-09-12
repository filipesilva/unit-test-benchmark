import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8743Component } from './my-comp-8743.component';

describe('MyComp8743Component', () => {
  let component: MyComp8743Component;
  let fixture: ComponentFixture<MyComp8743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
