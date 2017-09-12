import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8668Component } from './my-comp-8668.component';

describe('MyComp8668Component', () => {
  let component: MyComp8668Component;
  let fixture: ComponentFixture<MyComp8668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
