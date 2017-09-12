import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8776Component } from './my-comp-8776.component';

describe('MyComp8776Component', () => {
  let component: MyComp8776Component;
  let fixture: ComponentFixture<MyComp8776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
