import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8543Component } from './my-comp-8543.component';

describe('MyComp8543Component', () => {
  let component: MyComp8543Component;
  let fixture: ComponentFixture<MyComp8543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
