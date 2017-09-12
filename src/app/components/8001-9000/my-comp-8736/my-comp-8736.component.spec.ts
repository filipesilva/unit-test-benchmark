import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8736Component } from './my-comp-8736.component';

describe('MyComp8736Component', () => {
  let component: MyComp8736Component;
  let fixture: ComponentFixture<MyComp8736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
