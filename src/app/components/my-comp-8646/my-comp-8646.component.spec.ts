import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8646Component } from './my-comp-8646.component';

describe('MyComp8646Component', () => {
  let component: MyComp8646Component;
  let fixture: ComponentFixture<MyComp8646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
