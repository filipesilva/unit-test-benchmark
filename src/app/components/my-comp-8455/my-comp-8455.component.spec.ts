import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8455Component } from './my-comp-8455.component';

describe('MyComp8455Component', () => {
  let component: MyComp8455Component;
  let fixture: ComponentFixture<MyComp8455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
